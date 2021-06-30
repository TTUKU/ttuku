import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Discord } from './strategy'
import { masterOnly } from '../util'
import { UserModule } from '../user/user.module'

@Module({
    providers: [AuthService, ...masterOnly(Discord)],
    controllers: [...masterOnly(AuthController)],
    imports: [UserModule],
})
export class AuthModule {}
