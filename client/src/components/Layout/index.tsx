import React from 'react'
import Header from './Header'
import RoomList from './RoomList'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col md:grid grid-cols-3 h-screen">
            <div className="col-span-2 flex flex-col flex-grow px-8 pt-14 pb-8">
                <Header />
                <div
                    className="p-4 bg-white flex-grow h-0"
                    style={{ overflowY: 'scroll' }}
                >
                    {children}
                </div>
            </div>
            <div
                className="h-full bg-white flex-grow relative px-8 pb-8 pt-14"
                style={{
                    background: '#263238',
                    color: '#fff',
                }}
            >
                <RoomList />
            </div>
        </div>
    )
}

export default Layout
