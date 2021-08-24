import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request, Response } from 'express'
import prisma from '../prisma'
import { JwtService } from '@nestjs/jwt'

@Controller('auth')
export class AuthController {
    constructor(private jwt: JwtService) {}

    async authenticate(profile: any, res: Response) {
        const method = await prisma.userAuthStrategy.findFirst({
            where: {
                provider: profile.provider,
                uid: profile.id,
            },
        })

        const user = await prisma.user.upsert({
            create: {
                authStrategies: {
                    createMany: {
                        data: {
                            provider: profile.provider as any,
                            uid: profile.id as any,
                        },
                    },
                },
                nick: profile.nick as any,
            },
            where: {
                id: method?.id || -1,
            },
            update: {},
        })

        res.redirect(
            '/auth/callback?token=' +
                this.jwt.sign({
                    id: user.id,
                }),
        )
    }

    @Get('discord')
    @UseGuards(AuthGuard('discord'))
    async discord(@Req() req: Request, @Res() res: Response) {
        return this.authenticate(req.user, res)
    }
}
