import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="mt-4">{children}</div>
        </div>
    )
}

export default Layout
