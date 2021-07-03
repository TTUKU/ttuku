import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'

@Controller('api/auth')
export class AuthController {
    constructor(private jwt: JwtService) {}

    @Get('/discord')
    @UseGuards(AuthGuard('discord'))
    @Redirect()
    async discord(@Req() req: Request) {
        return {
            url: '/callback?token=' + (await this.callback(req)),
        }
    }

    callback(req: Request) {
        return this.jwt.sign({ id: req.user.id })
    }
}
