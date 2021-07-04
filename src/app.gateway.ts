import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'

@WebSocketGateway()
export class AppGateway {
    @WebSocketServer()
    server: Server

    handleConnection() {
        this.server.sockets.emit(
            'playerCount',
            this.server.sockets.sockets.size,
        )
    }

    handleDisconnect() {
        this.server.sockets.emit(
            'playerCount',
            this.server.sockets.sockets.size,
        )
    }
}
