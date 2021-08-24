import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-discord'
import authConfig from '../auth.config'

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            ...authConfig.discord,
            scope: ['identify'],
        })
    }

    validate(accessToken, refreshToken, profile) {
        return {
            id: profile.id,
            nick: profile.username,
            provider: 'discord',
        }
    }
}
