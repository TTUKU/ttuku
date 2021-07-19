import React from 'react'
import { Fab, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core/index'

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
            <Typography className="text-center" fontWeight={700}>
                {text}
            </Typography>
        </div>
    )
}

export default HeaderItem
