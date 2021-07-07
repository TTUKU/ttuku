import React from 'react'
import {
    createTheme,
    Icon,
    InputBase,
    List,
    ListItem,
    ListItemText,
    ThemeProvider,
} from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { room, rooms } from '../../state'
import { socket } from '../../utils'
import { Room } from '../../typings'
import { makeStyles } from '@material-ui/styles'

const withStyles = makeStyles(() => ({
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 100,
        flexGrow: 1,
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    filterButton: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
}))

const RoomListContent = () => {
    // const roomList = useRecoilValue(rooms)
    const currentRoom = useRecoilValue(room)

    const classes = withStyles()

    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="h-full flex flex-col gap-4 text-black">
                <div className="flex gap-4">
                    <div className={classes.searchBar}>
                        <Icon>search</Icon>
                        <InputBase
                            className="flex-grow"
                            placeholder="방 이름 또는 규칙으로 검색하기"
                        />
                    </div>
                    <div className={classes.filterButton}>
                        <Icon>filter_list</Icon>
                    </div>
                </div>
                <List
                    style={{ overflowY: 'scroll', height: 0 }}
                    className="flex-grow"
                >
                    {(
                        new Array(100).fill({
                            id: '1',
                            players: 1,
                            owner: socket.id,
                            name: '테스트',
                            maxPlayers: 8,
                        }) as Room[]
                    ).map((room, i) => (
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
            </div>
        </ThemeProvider>
    )
}

export default RoomListContent
