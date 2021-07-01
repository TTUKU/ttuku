import 'dotenv/config'
import { Logger } from './logger'
import { NestFactory } from '@nestjs/core'
import { SocketIoAdapter } from './socket-io.adapter'
import { ClusterService } from './cluster.service'
import * as cluster from 'cluster'
import { AppModule } from './app.module'
import { WorkerModule } from './worker.module'

async function bootstrap() {
    const app = await NestFactory.create(
        cluster.isMaster ? AppModule : WorkerModule,
        {
            logger: new Logger(),
        },
    )
    app.useWebSocketAdapter(new SocketIoAdapter(app))
    const port =
        Number(process.env.BASE_PORT) +
        (cluster.isMaster ? 0 : cluster.worker.id)
    Logger.Log(`포트 ${port}으로 서버 시작중...`)
    await app.listen(port)
}
ClusterService.clusterize(bootstrap)
