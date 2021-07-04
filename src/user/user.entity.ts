import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import * as gravatar from 'gravatar'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nick: string

    @Column()
    provider: string

    @Column()
    oidcID: string

    @Column()
    email: string

    @Column({ default: '' })
    avatar: string

    toJSON() {
        const { id, nick, email, oidcID, avatar } = this
        return {
            id,
            nick,
            email,
            oidcID,
            avatar: avatar || gravatar.url(this.email),
        }
    }
}
