import type { User as TUser } from '@prisma/client'

declare global {
    namespace Express {
        // eslint-disable-next-line
        interface User extends TUser {}
    }
}
