import React from 'react'
import Header from './Header'
import { Box, styled } from '@material-ui/core'
import Sidebar from '~/components/Layout/Sidebar'
import LoginModal from '~/components/Layout/LoginModal'

const Spacer = styled('div')(({ theme }) => theme.mixins.toolbar)

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <LoginModal />
            <Sidebar />
            <Box component="main" sx={{ p: 3 }}>
                <Spacer />
                {children}
            </Box>
        </div>
    )
}

export default Layout
