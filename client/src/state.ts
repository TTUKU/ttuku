import { atom } from 'recoil'

export const SDrawerOpen = atom<boolean>({
    key: 'drawerOpen',
    default: false,
})
