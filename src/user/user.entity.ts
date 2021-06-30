import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nick: string

    @Column()
    provider: string

    @Column()
    oidcID: string
}
