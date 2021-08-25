import { atom, selector } from 'recoil'
import { TUser } from '~/typings'
import axios from 'axios'

export const SDrawerOpen = atom<boolean>({
    key: 'drawerOpen',
    default: false,
})

export const SUser = selector<TUser | null>({
    key: 'user',
    get: async () => {
        try {
            const { data: user } = await axios.get<TUser>('/api/users/@me')
            return user || null
        } catch {
            return null
        }
    },
})
