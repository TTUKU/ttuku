import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Discord } from './strategy'
import { masterOnly } from '../util'

@Module({
    providers: [AuthService, ...masterOnly(Discord)],
    controllers: [...masterOnly(AuthController)],
})
export class AuthModule {}
