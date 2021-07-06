import { Injectable } from '@nestjs/common'
import { Socket } from 'socket.io'
import * as _ from 'lodash'
import { RoomGateway } from './room.gateway'

export class Room {
    constructor(
        public id: string,
        public name: string,
        public owner: Socket,
        public maxPlayers: number,
        private roomService: RoomService,
        private roomGateway: RoomGateway,
    ) {
        owner.join('play-' + id)
        owner.emit('joinRoom', this.toJSON())
        owner.emit('alert', {
            type: 'success',
            message: '방을 만들었어요!',
        })
    }

    members: Socket[] = []

    addMember(socket: Socket) {
        if (!socket.user) {
            socket.emit('alert', {
                type: 'error',
                message: '로그인해주세요',
            })
            return
        }
        if (this.fullMembers.length + 1 > this.maxPlayers) {
            socket.emit('alert', {
                type: 'error',
                message: '이미 꽉 찬 방에는 들어갈수 없어요!',
            })
            return
        }

        if (this.owner === socket) return

        this.roomService.rooms
            .filter((x) => x.members.includes(socket))
            .forEach((x) => x.removeMember(socket, true))

        this.roomService.rooms
            .filter((x) => x.owner === socket)
            .forEach((room) => {
                _.remove(this.roomService.rooms, room)
                socket.leave('play-' + room.id)
                room.members.forEach((value) => {
                    value.emit('leaveRoom')
                    value.emit('alert', {
                        type: 'info',
                        message: '방장이 방을 삭제했어요!',
                    })
                })
            })

        socket.join('play-' + this.id)

        this.members.push(socket)

        socket.emit('joinRoom', this.toJSON())
    }

    removeMember(socket: Socket, move = false) {
        socket.leave('play-' + this.id)
        if (!move) {
            socket.emit('leaveRoom')
        }
        _.remove(this.members, socket)
    }

    get fullMembers() {
        return [...this.members, this.owner]
    }

    toJSON() {
        const { id, owner, maxPlayers, name } = this
        return {
            id,
            owner: owner.id,
            maxPlayers,
            name,
            players: this.fullMembers.length,
        }
    }
}

@Injectable()
export class RoomService {
    rooms: Room[] = []
}
