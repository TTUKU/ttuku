import React from 'react'
import {
    Fab,
    Icon,
    List,
    ListItem,
    ListItemText,
    styled,
    Toolbar,
    Typography,
} from '@material-ui/core'
import clsx from 'clsx'
import RoomListContent from './RoomListContent'
import RoomCreate from './RoomCreate'
import { useRecoilValue } from 'recoil'
import { room, userState } from '../../state'
import { socket } from '../../utils'

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'absolute',
    bottom: 16,
    right: 16,
}))

const RoomList = () => {
    const [roomCreate, setRoomCreate] = React.useState(false)
    const currentRoom = useRecoilValue(room)
    const user = useRecoilValue(userState)

    return (
        <div className="flex flex-col h-full">
            <Toolbar className="border-b">
                <Typography variant="h6">
                    {roomCreate ? '방 만들기' : '방 목록'}
                </Typography>
                <div className="flex-grow" />
                {/*<Tooltip title="방 만들기">*/}
                {/*    <IconButton>*/}
                {/*        <Icon>add</Icon>*/}
                {/*    </IconButton>*/}
                {/*</Tooltip>*/}
            </Toolbar>
            {roomCreate ? (
                <RoomCreate close={() => setRoomCreate(false)} />
            ) : (
                <RoomListContent />
            )}
            {!currentRoom && user ? (
                <StyledFab
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
                    >
                        add
                    </Icon>
                </StyledFab>
            ) : (
                currentRoom && (
                    <StyledFab
                        color="primary"
                        onClick={() => socket.emit('leaveRoom')}
                    >
                        <Icon>logout</Icon>
                    </StyledFab>
                )
            )}
        </div>
    )
}

export default RoomList
