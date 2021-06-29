import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="text-white">
            <Header />
            {children}
        </div>
    )
}

export default Layout
