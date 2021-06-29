import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { globalModules } from './util'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        ...globalModules,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
