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

    get avatar() {
        return gravatar.url(this.email)
    }

    toJSON() {
        const { id, nick, email, oidcID, avatar } = this
        return {
            id,
            nick,
            email,
            oidcID,
            avatar,
        }
    }
}
