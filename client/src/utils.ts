import io from 'socket.io-client'

export const socket = io('/', {
    autoConnect: false,
    extraHeaders: {
        Authorization: localStorage.token || '',
    },
})
