import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import Strategies from './strategies'
import authConfig from './auth.config'
import { JwtModule } from '@nestjs/jwt'

const strategies = Object.entries(Strategies)
    .filter((x: [string, any]) => !!authConfig[x[0]])
    .map((x) => x[1])

@Module({
    controllers: [AuthController],
    providers: [AuthService, ...strategies],
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
        }),
    ],
})
export class AuthModule {}
