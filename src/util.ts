import * as cluster from 'cluster'
import { TypeOrmModule } from '@nestjs/typeorm'

export const masterOnly = (...args: any[]) => (cluster.isMaster ? args : [])

export const globalModules = [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: ['**/*.entity.js'],
        synchronize: true,
    }),
]
