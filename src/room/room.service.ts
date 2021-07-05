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
    }

    members: Socket[] = []

    toJSON() {
        const { id } = this
        return {
            id,
        }
    }
}

@Injectable()
export class RoomService {
    rooms: Room[] = []
}
