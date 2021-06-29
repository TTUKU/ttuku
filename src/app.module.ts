import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
