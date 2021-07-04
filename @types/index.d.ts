import { User as UserModel } from '../src/user/user.entity'

declare global {
    namespace Express {
        // eslint-disable-next-line
        interface User extends UserModel {}
    }
}

declare module 'socket.io' {
    interface Socket {
        user: UserModel
    }
}
