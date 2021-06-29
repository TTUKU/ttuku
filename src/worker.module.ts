import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { globalModules } from './util'

@Module({
    imports: [AuthModule, ...globalModules],
})
export class WorkerModule {}
