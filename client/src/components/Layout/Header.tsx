import React from 'react'
import {
    AppBar,
    Button,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core'
import { Logout, Menu as MenuIcon } from '@material-ui/icons'
import { SIDEBAR_WIDTH } from '~/constants'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { SDrawerOpen, SLoginMenuOpen, SUser } from '~/state'

const UserMenu = () => {
    const user = useRecoilValue(SUser)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const setLoginMenuOpen = useSetRecoilState(SLoginMenuOpen)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            {user ? (
                <>
                    <Tooltip title="유저 메뉴">
                        <Button onClick={handleClick} color="inherit">
                            {user.nick}
                        </Button>
                    </Tooltip>
                </>
            ) : (
                <Button color="inherit" onClick={() => setLoginMenuOpen(true)}>
                    로그인
                </Button>
            )}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={() => {
                        delete localStorage.token
                        window.location.href = '/'
                    }}
                >
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    로그아웃
                </MenuItem>
            </Menu>
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
