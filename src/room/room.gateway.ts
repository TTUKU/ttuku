import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { Room, RoomService } from './room.service'
import { randomUUID } from 'crypto'
import * as _ from 'lodash'

@WebSocketGateway()
export class RoomGateway {
    @WebSocketServer()
    server: Server

    constructor(private room: RoomService) {}

    updateRoomList() {
        this.server.sockets.emit(
            'updateRoomList',
            this.room.rooms.map((x) => x.toJSON()),
        )
    }

    @SubscribeMessage('createRoom')
    createRoom(@ConnectedSocket() socket: Socket, @MessageBody() body: any) {
        const room = Array.from(socket.rooms).find((x) => x !== socket.id)
        if (room)
            return socket.emit('alert', {
                type: 'error',
                message: '방에 들어가있는 상태로 방을 만들 수 없습니다.',
            })

        if (!body.name || !body.playerCount) return

        this.room.rooms.push(
            new Room(
                randomUUID(),
                body.name,
                socket,
                body.playerCount,
                this.room,
                this,
            ),
        )

        this.updateRoomList()
    }

    @SubscribeMessage('leaveRoom')
    leaveRoom(@ConnectedSocket() socket: Socket) {
        let room = this.room.rooms.find((x) => x.owner === socket)
        if (room) {
            _.remove(this.room.rooms, room)
            socket.leave('play-' + room.id)
            socket.emit('leaveRoom')
            room.members.forEach((value) => {
                value.emit('leaveRoom')
                value.emit('alert', {
                    type: 'info',
                    message: '방장이 방을 삭제했어요!',
                })
            })
            socket.emit('alert', {
                type: 'info',
                message: '방이 삭제되었어요.',
            })
            return this.updateRoomList()
        } else {
            room = this.room.rooms.find((x) => x.members.includes(socket))
            if (room) {
                room.removeMember(socket)
            }
            socket.emit('alert', {
                type: 'info',
                message: '방에서 나갔어요!',
            })
        }
        this.updateRoomList()
    }

    @SubscribeMessage('joinRoom')
    joinRoom(@ConnectedSocket() socket: Socket, @MessageBody() body: any) {
        const roomId = body?.room
        if (!roomId) return
        const room = this.room.rooms.find((x) => x.id === roomId)
        if (!room) return
        room.addMember(socket)
        this.updateRoomList()
    }

    handleConnection() {
        this.updateRoomList()
    }

    handleDisconnect(@ConnectedSocket() socket: Socket) {
        const ownerRoom = this.room.rooms.find((x) => x.owner === socket)

        if (ownerRoom) {
            _.remove(this.room.rooms, ownerRoom)
        }

        const room = this.room.rooms.find((x) => x.members.includes(socket))

        if (room) {
            room.removeMember(socket)
        }

        this.updateRoomList()
    }
}
