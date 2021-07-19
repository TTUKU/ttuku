import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../../state'
import { useHistory } from 'react-router-dom'
import { Icon, ListItemIcon, Menu, MenuItem } from '@material-ui/core'
import { socket } from '../../utils'
import LoginPage from '../Login'
import { Button } from '@material-ui/core/index'

const UserMenu = () => {
    const [user, setUser] = useRecoilState(userState)
    const [anchorEl, setAnchorEl] = React.useState<any>(null)
    const open = !!anchorEl && !!user
    const close = () => setAnchorEl(null)
    const history = useHistory()
    const [loginModal, setLoginModal] = React.useState(false)

    return user === null ? null : user === false ? (
        <>
            <LoginPage open={loginModal} onClose={() => setLoginModal(false)} />
            <Button onClick={() => setLoginModal(true)} variant="contained">
                로그인
            </Button>
        </>
    ) : (
        <>
            <div
                className="cursor-pointer"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <img
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    src={user.avatar}
                    alt={user.nick}
                    style={{ height: 70, borderRadius: '50%' }}
                />
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={close}
                onClick={close}
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
                        setUser(false)
                        delete localStorage.token
                        socket.emit('logout')
                        history.push('/')
                    }}
                >
                    <ListItemIcon>
                        <Icon>lock-open</Icon>
                    </ListItemIcon>
                    로그아웃
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserMenu
