import { atom } from 'recoil'
import type { Room, User } from './typings'

export const userState = atom<User | null | false>({
    default: null,
    key: 'user',
})

export const tokenState = atom<string | null>({
    default: localStorage.token || null,
    key: 'token',
})

export const stats = {
    playerCount: atom<number>({
        default: 0,
        key: 'stats.playerCount',
    }),
}

export const rooms = atom<Room[]>({
    key: 'rooms',
    default: [],
})

export const room = atom<Room | null>({
    key: 'currentRoom',
    default: null,
})
