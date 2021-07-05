import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

const RoomListContent = () => {
    return (
        <List style={{ overflowY: 'scroll', height: 0 }} className="flex-grow">
            <ListItem button>
                <ListItemText
                    primary="와아"
                    secondary="끝말잇기 / 1/8 / 대기중"
                />
            </ListItem>
        </List>
    )
}

export default RoomListContent
