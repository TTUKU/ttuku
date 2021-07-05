import React from 'react'
// import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="p-8">
            {/*<Header />*/}
            {/*<div className="mt-4 container mx-auto px-4">{children}</div>*/}
            {children}
        </div>
    )
}

export default Layout
