import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="p-8 grid grid-cols-3 gap-4 h-screen">
            <div className="col-span-2 flex flex-col gap-4">
                <Header />
                <div className="p-4 border flex-grow">{children}</div>
            </div>
            <div className="border h-full p-4">와아아</div>
        </div>
    )
}

export default Layout
