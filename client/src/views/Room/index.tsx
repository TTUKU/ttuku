import React from 'react'
import { Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { room } from '../../state'

const Room = () => {
    const [currentRoom] = useRecoilState(room)
    if (!currentRoom) return <Redirect to="/" />

    return <div>{JSON.stringify(currentRoom)}</div>
}

export default Room
