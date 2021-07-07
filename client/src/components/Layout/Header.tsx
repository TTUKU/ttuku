import React from 'react'
import Logo from '../../assets/img/logo.png'
import { useHistory } from 'react-router-dom'
import UserMenu from './UserMenu'
import { AppBar, styled } from '@material-ui/core'
import HeaderItem from './HeaderItem'

const Toolbar = styled('div')({
    display: 'flex',
    alignItems: 'center',
})

const Header = () => {
    const router = useHistory()

    return (
        <AppBar elevation={0} color="inherit" position="relative">
            <Toolbar style={{ gap: 30 }}>
                <img
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push('/')}
                    style={{
                        height: 70,
                        cursor: 'pointer',
                        marginRight: 20,
                    }}
                />
                <HeaderItem icon="home" to="/" text="홈" active />
                <HeaderItem icon="shopping_cart" to="/shop" text="상점" />
                <HeaderItem icon="settings" to="/settings" text="설정" />
                <div className="flex-grow" />
                <UserMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header
