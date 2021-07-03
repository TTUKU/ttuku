import React from 'react'
import { useRecoilState } from 'recoil'
import { tokenState, userState } from '../../state'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@material-ui/core'

const UserMenu = () => {
    const [user] = useRecoilState(userState)
    const [anchorEl, setAnchorEl] = React.useState<any>(null)
    const [, setToken] = useRecoilState(tokenState)
    const open = !!anchorEl && !!user
    const close = () => setAnchorEl(null)

    return user === null ? null : user === false ? (
        <Link to="/login">로그인</Link>
    ) : (
        <>
            <div
                className="cursor-pointer"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                {user.nick}
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
                        setToken(null)
                    }}
                >
                    로그아웃
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserMenu
