import { PassportStrategy } from '@nestjs/passport'
import { Strategy as DiscordStrategy } from 'passport-discord'

export class Discord extends PassportStrategy(DiscordStrategy) {
    constructor() {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CALLBACK,
            scope: 'identify',
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {}
}
