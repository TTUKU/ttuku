import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: 'client/build',
        }),
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
