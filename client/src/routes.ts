import Main from '~/views/Main'
import Callback from '~/views/Auth/Callback'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/auth/callback',
        exact: true,
        component: Callback,
    },
]
