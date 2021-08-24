import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">TTUKU</Typography>
                <div style={{ flexGrow: 1 }} />
                <Button color="inherit">로그인</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
