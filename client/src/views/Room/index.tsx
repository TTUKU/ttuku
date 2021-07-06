import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { room } from '../../state'
import { socket } from '../../utils'

const Room = () => {
    const [currentRoom] = useRecoilState(room)
    if (!currentRoom) return <Redirect to="/" />

    useEffect(() => {
        return () => {
            socket.emit('leaveRoom')
        }
    }, [])

    return <div>{JSON.stringify(currentRoom)}</div>
}

export default Room
