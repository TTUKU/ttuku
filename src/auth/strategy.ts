import { PassportStrategy } from '@nestjs/passport'
import { Strategy as DiscordStrategy } from 'passport-discord'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'

@Injectable()
export class Discord extends PassportStrategy(DiscordStrategy) {
    constructor(private auth: AuthService) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK,
            scope: 'identify',
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        return this.auth.validate({
            id: profile.id,
            nick: profile.username,
            provider: profile.provider,
        })
    }
}

@Injectable()
export class JWT extends PassportStrategy(JwtStrategy) {
    constructor(private user: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    validate(data: any) {
        return this.user.fromID(data.id)
    }
}
