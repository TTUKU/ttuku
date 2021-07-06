export interface User {
    id: number
    nick: string
    email: string
    avatar: string
}

export interface Room {
    id: string
    name: string
    maxPlayers: number
    owner: string
    players: number
}
