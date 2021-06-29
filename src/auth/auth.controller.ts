import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('api/auth')
export class AuthController {
    @Get('/discord')
    @UseGuards(AuthGuard('discord'))
    async discord(@Req() req: Request) {
        return req.user
    }
}
