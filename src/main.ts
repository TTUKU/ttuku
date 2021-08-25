import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// eslint-disable-next-line
// @ts-ignore
BigInt.prototype.toJSON = function () {
    return Number(this)
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}
bootstrap()
