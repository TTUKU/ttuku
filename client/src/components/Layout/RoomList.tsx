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

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'absolute',
    bottom: 16,
    right: 16,
}))

const RoomList = () => {
    const [roomCreate, setRoomCreate] = React.useState(false)

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
        </div>
    )
}

export default RoomList
