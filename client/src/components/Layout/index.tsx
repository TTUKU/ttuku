import React from 'react'
import Header from './Header'
import RoomList from './RoomList'
import ChatArea from './ChatArea'

const Layout: React.FC = ({ children }) => {
    return (
        <div
            className="flex flex-col md:grid grid-cols-4 h-screen"
            style={{ boxSizing: 'border-box' }}
        >
            <div
                className="col-span-3 flex flex-col flex-grow px-16 pt-14 pb-8"
                style={{
                    boxSizing: 'border-box',
                }}
            >
                <Header />
                {children}
                <ChatArea />
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
