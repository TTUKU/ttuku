import React from 'react'
import {
    createTheme,
    Icon,
    InputBase,
    styled,
    ThemeProvider,
} from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { room } from '../../state'
import { socket } from '../../utils'
import { Room } from '../../typings'
import { makeStyles } from '@material-ui/styles'
import { grey, blueGrey } from '@material-ui/core/colors'

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

const RoomItem = styled('div')({
    padding: '15px 25px',
    background: grey['50'],
    borderRadius: 15,
    userSelect: 'none',
    cursor: 'pointer',
})

const PlayerIcon = styled('span')({
    width: 11,
    height: 11,
    display: 'inline-block',
    borderRadius: '50%',
})

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
                <div
                    style={{
                        overflowY: 'scroll',
                        height: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}
                    className="flex-grow pr-2"
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
                        <RoomItem
                            key={i}
                            onClick={() => {
                                socket.emit('joinRoom', {
                                    room: room.id,
                                })
                            }}
                            // disabled={room.id === currentRoom?.id}
                        >
                            <div className="text-xl font-bold">{room.name}</div>
                            <div className="flex justify-between">
                                <div className="text-sm">
                                    <span>한방금지</span>&nbsp;
                                    <span className="font-bold">끝말잇기</span>
                                </div>
                                <div className="flex gap-1 items-end">
                                    {Array(room.maxPlayers)
                                        .fill(null)
                                        .map((e, i) => (
                                            <PlayerIcon
                                                style={{
                                                    backgroundColor:
                                                        i >= room.players
                                                            ? grey['500']
                                                            : blueGrey['900'],
                                                }}
                                                key={i}
                                            />
                                        ))}
                                </div>
                            </div>
                        </RoomItem>
                    ))}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default RoomListContent
