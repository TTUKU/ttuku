import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { globalModules } from './util'
import { UserModule } from './user/user.module'
import * as fs from 'fs'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: fs.existsSync(path.join(__dirname, '../client/build'))
                ? path.join(__dirname, '../client/build')
                : path.join(__dirname, '../client/dist'),
        }),
        ...globalModules,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
