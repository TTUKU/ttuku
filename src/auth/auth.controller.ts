import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('auth')
export class AuthController {
    async authenticate(profile: any) {
        // TODO("으아아아앙")
        return '으아아아앙'
    }

    @Get('discord')
    @UseGuards(AuthGuard('discord'))
    async discord(@Req() req: Request) {
        return this.authenticate(req.user)
    }
}
