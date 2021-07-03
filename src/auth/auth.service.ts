import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserService } from '../user/user.service'

type UserAuthData = {
    id: string
    provider: string
    nick: string
}

@Injectable()
export class AuthService {
    constructor(
        private jwt: JwtService,
        @InjectRepository(User) private userRepo: Repository<User>,
        private user: UserService,
    ) {}

    async fromToken(token: string) {
        return this.user.fromID((await this.jwt.verifyAsync(token)).id)
    }

    async validate(data: UserAuthData) {
        let user = await this.userRepo.findOne({
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
            await this.userRepo.save(user)
        }
        return user
    }
}
