import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

type UserAuthData = {
    id: string
    provider: string
    nick: string
}

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async validate(data: UserAuthData) {
        let user = await this.repo.findOne({
            where: {
                oidcID: data.id,
                provider: data.provider,
            },
        })
        if (!user) {
            user = new User()
            user.provider = data.provider
            user.oidcID = data.id
            user.nick = data.nick
            await this.repo.save(user)
        }
        return user
    }
}
