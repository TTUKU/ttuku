import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { Discord, JWT } from './strategy'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
    providers: [AuthService, Discord, JWT],
    controllers: [AuthController],
    imports: [
        UserModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            verifyOptions: {
                ignoreExpiration: false,
            },
        }),
    ],
    exports: [AuthService],
})
export class AuthModule {}
