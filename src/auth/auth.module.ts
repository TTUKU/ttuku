import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import * as cluster from 'cluster'

@Module({
    providers: [AuthService],
    controllers: [...(cluster.isMaster ? [AuthController] : [])],
})
export class AuthModule {}
