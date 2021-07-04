import 'dotenv/config'
import { Logger } from './logger'
import { NestFactory } from '@nestjs/core'
import { SocketIoAdapter } from './socket-io.adapter'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new Logger(),
    })
    app.useWebSocketAdapter(new SocketIoAdapter(app))
    const port = Number(process.env.PORT)

    Logger.Log(`포트 ${port}으로 서버 시작중...`)
    await app.listen(port)
}
// ClusterService.clusterize(bootstrap)

bootstrap()
