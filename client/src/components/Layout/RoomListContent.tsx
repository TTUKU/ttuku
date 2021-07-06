import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { room, rooms } from '../../state'
import { socket } from '../../utils'

const RoomListContent = () => {
    const roomList = useRecoilValue(rooms)
    const currentRoom = useRecoilValue(room)

    return (
        <List style={{ overflowY: 'scroll', height: 0 }} className="flex-grow">
            {roomList.map((room, i) => (
                <ListItem
                    button
                    key={i}
                    onClick={() => {
                        socket.emit('joinRoom', {
                            room: room.id,
                        })
                    }}
                    disabled={room.id === currentRoom?.id}
                >
                    <ListItemText
                        primary={room.name}
                        secondary={`끝말잇기 / ${room.players}/${room.maxPlayers} / 대기중`}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default RoomListContent
