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

    return (
        <div>
            <div
                style={{
                    backgroundColor: '#263238',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#fff',
                    padding: '16px 50px',
                }}
            >
                {currentRoom.name}
            </div>
        </div>
    )
}

export default Room
