import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { globalModules } from './util'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        ...globalModules,
        UserModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
