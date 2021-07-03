import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Discord, JWT } from './strategy'
import { masterOnly } from '../util'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
    providers: [AuthService, ...masterOnly(Discord), JWT],
    controllers: [...masterOnly(AuthController)],
    imports: [
        UserModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            verifyOptions: {
                ignoreExpiration: false,
            },
        }),
    ],
})
export class AuthModule {}
