import React from 'react'
import Logo from '../../assets/img/logo.png'
import { useHistory } from 'react-router-dom'
import UserMenu from './UserMenu'
import { AppBar, Toolbar } from '@material-ui/core'

const Header = () => {
    const router = useHistory()

    return (
        <AppBar
            elevation={0}
            color="transparent"
            className="border-b top-0"
            position="sticky"
        >
            <Toolbar>
                <img
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push('/')}
                    style={{
                        maxWidth: 50,
                    }}
                />
                <div className="flex-grow" />
                <UserMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header
