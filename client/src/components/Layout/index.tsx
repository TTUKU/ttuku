import React from 'react'
import Header from './Header'
import RoomList from './RoomList'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="p-8 flex flex-col md:grid grid-cols-3 gap-4 h-screen">
            <div className="col-span-2 flex flex-col gap-4 flex-grow">
                <Header />
                <div
                    className="p-4 bg-white flex-grow h-0"
                    style={{ overflowY: 'scroll' }}
                >
                    {children}
                </div>
            </div>
            <div className="h-full bg-white flex-grow relative">
                <RoomList />
            </div>
        </div>
    )
}

export default Layout
