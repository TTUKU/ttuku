import { atom } from 'recoil'
import type { User } from './typings'

export const userState = atom<User | null | false>({
    default: null,
    key: 'user',
})
