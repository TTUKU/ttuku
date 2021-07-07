import React from 'react'
import { Fab, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'

const HeaderItem: React.FC<{
    active?: boolean
    icon: string
    text: string
    to: string
}> = ({ active, icon, text, to }) => {
    return (
        <div className="flex flex-col">
            <Fab
                component={Link}
                to={to}
                {...(active
                    ? {}
                    : {
                          style: {
                              background: '#263238',
                              color: '#fff',
                          },
                      })}
            >
                <Icon>{icon}</Icon>
            </Fab>
            <div className="text-center font-bold">{text}</div>
        </div>
    )
}

export default HeaderItem
