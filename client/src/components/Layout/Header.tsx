import React from 'react'
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { SIDEBAR_WIDTH } from '~/constants'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { SDrawerOpen, SUser } from '~/state'

const UserMenu = () => {
    const user = useRecoilValue(SUser)
    return (
        <>
            {user ? (
                <div>{user.nick}</div>
            ) : (
                <Button color="inherit">로그인</Button>
            )}
        </>
    )
}

const Header = () => {
    const setDrawerOpen = useSetRecoilState(SDrawerOpen)

    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    xs: '100vw',
                    md: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
                },
                left: 0,
            }}
        >
            <Toolbar style={{ gap: 10 }}>
                <Typography variant="h6">TTUKU</Typography>
                <div style={{ flexGrow: 1 }} />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <UserMenu />
                </React.Suspense>
                <IconButton
                    color="inherit"
                    size="small"
                    sx={{
                        display: {
                            xs: 'inline-flex',
                            md: 'none',
                        },
                    }}
                    onClick={() => setDrawerOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
