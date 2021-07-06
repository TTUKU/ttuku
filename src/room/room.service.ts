import { Injectable } from '@nestjs/common'
import { Socket } from 'socket.io'

export class Room {
    constructor(
        public id: string,
        public name: string,
        public owner: Socket,
        public maxPlayers: number,
    ) {
        owner.join('play-' + id)
        owner.emit('joinRoom', this.toJSON())
        owner.emit('alert', {
            type: 'success',
            message: '방을 만들었어요!',
        })
    }

    members: Socket[] = []

    toJSON() {
        const { id, owner, maxPlayers, name } = this
        return {
            id,
            owner: owner.id,
            maxPlayers,
            name,
            players: this.members.length + 1,
        }
    }
}

@Injectable()
export class RoomService {
    rooms: Room[] = []
}
