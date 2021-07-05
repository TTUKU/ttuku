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
            new Room(randomUUID(), body.name, socket, body.playerCount),
        )

        this.updateRoomList()
    }

    handleDisconnect(@ConnectedSocket() socket: Socket) {
        _.remove(
            this.room.rooms,
            this.room.rooms.find((x) => x.owner === socket),
        )

        this.updateRoomList()
    }
}
