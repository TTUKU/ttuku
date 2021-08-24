import React from 'react'
import Header from './Header'
import { styled } from '@material-ui/core'

const Spacer = styled('div')(({ theme }) => theme.mixins.toolbar)

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                <Spacer />
                {children}
            </main>
        </div>
    )
}

export default Layout
