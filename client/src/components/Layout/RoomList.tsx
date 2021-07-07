import React from 'react'
import { createTheme, Icon, ThemeProvider, Typography } from '@material-ui/core'
import clsx from 'clsx'
import RoomListContent from './RoomListContent'
import RoomCreate from './RoomCreate'
import { useRecoilValue } from 'recoil'
import { room, userState } from '../../state'
import { socket } from '../../utils'
import { styled } from '@material-ui/styles'

const Fab = styled('div')({
    backgroundColor: '#fff',
    color: '#000',
    width: 70,
    height: 70,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
})

const RoomList = () => {
    const [roomCreate, setRoomCreate] = React.useState(false)
    const currentRoom = useRecoilValue(room)
    const user = useRecoilValue(userState)
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-full gap-4">
                <Typography variant="h4" fontWeight={700}>
                    {roomCreate ? '방 만들기' : '방 목록'}
                </Typography>
                <div className="flex-grow">
                    {roomCreate ? (
                        <RoomCreate close={() => setRoomCreate(false)} />
                    ) : (
                        <RoomListContent />
                    )}
                </div>
                <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
                    {!currentRoom && user ? (
                        <Fab
                            color="primary"
                            className={clsx({ active: roomCreate })}
                            onClick={() => setRoomCreate(!roomCreate)}
                        >
                            <Icon
                                style={{
                                    transform: roomCreate
                                        ? 'rotate(45deg)'
                                        : 'rotate(0deg)',
                                    transition: 'transform .5s ease',
                                }}
                                fontSize="large"
                            >
                                add
                            </Icon>
                        </Fab>
                    ) : (
                        currentRoom && (
                            <Fab
                                color="primary"
                                onClick={() => socket.emit('leaveRoom')}
                            >
                                <Icon fontSize="large">logout</Icon>
                            </Fab>
                        )
                    )}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default RoomList
