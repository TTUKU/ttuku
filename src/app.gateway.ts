import {
    ConnectedSocket,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { AuthService } from './auth/auth.service'

@WebSocketGateway()
export class AppGateway {
    constructor(private auth: AuthService) {}

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
                        (x) => !!x.user,
                    )
                ) {
                    return socket.emit('alreadyConnected')
                }
                socket.user = user
                socket.emit('init', {
                    user,
                })
            }
            this.playerCount()
        } catch {
            socket.emit('unauthenticated')
        }
    }

    handleDisconnect() {
        this.playerCount()
    }
}
