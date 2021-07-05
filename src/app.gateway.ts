import {
    ConnectedSocket,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { AuthService } from './auth/auth.service'
import { RoomService } from './room/room.service'

@WebSocketGateway()
export class AppGateway {
    constructor(private auth: AuthService, private room: RoomService) {}

    @WebSocketServer()
    server: Server

    playerCount() {
        this.server.emit(
            'playerCount',
            Array.from(this.server.sockets.sockets.values()).filter(
                (x) => !!x.user,
            ).length,
        )
    }

    @SubscribeMessage('logout')
    async logout(@ConnectedSocket() socket: Socket) {
        socket.user = null
        this.playerCount()
    }

    async handleConnection(@ConnectedSocket() socket: Socket) {
        const token = socket.handshake.headers.authorization
        try {
            const user = await this.auth.fromToken(token)
            if (!user) {
                socket.emit('unauthenticated')
            } else {
                if (
                    Array.from(this.server.sockets.sockets.values()).find(
                        (x) => x.user?.id === user.id,
                    )
                ) {
                    return socket.emit('alreadyConnected')
                }
                socket.user = user
                socket.emit('init', {
                    user,
                    room: this.room.rooms,
                })
            }
        } catch {
            socket.emit('unauthenticated')
        }
        this.playerCount()
    }

    handleDisconnect() {
        this.playerCount()
    }
}
