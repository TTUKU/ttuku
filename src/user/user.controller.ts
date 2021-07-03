import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { UserService } from './user.service'

@Controller('api/users')
export class UserController {
    constructor(private user: UserService) {}

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async fromID(@Param('id') id: number | '@me', @Req() req: Request) {
        let idToFetch
        if (id === '@me') {
            idToFetch = req.user.id
        } else {
            idToFetch = Number(id)
        }
        if (isNaN(idToFetch)) return
        return this.user.fromID(idToFetch)
    }
}
