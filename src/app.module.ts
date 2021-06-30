import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { globalModules } from './util'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        ...globalModules,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
