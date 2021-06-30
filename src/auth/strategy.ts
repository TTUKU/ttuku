import { PassportStrategy } from '@nestjs/passport'
import { Strategy as DiscordStrategy } from 'passport-discord'
import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

@Injectable()
export class Discord extends PassportStrategy(DiscordStrategy) {
    constructor(private userService: UserService) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK,
            scope: 'identify',
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        return this.userService.validate({
            id: profile.id,
            nick: profile.username,
            provider: profile.provider,
        })
    }
}
