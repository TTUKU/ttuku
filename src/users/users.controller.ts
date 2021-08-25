import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { AuthGuard } from '@nestjs/passport'

@Controller('api/users')
export class UsersController {
    @Get('@me')
    @UseGuards(AuthGuard('jwt'))
    me(@Req() req: Request) {
        return req.user
    }
}
