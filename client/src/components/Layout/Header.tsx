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
            color="inherit"
            className="border"
            position="relative"
        >
            <Toolbar>
                <img
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push('/')}
                    style={{
                        maxWidth: 50,
                        cursor: 'pointer',
                    }}
                />
                <div className="flex-grow" />
                <UserMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header
