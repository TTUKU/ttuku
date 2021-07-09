import React from 'react'
import { grey } from '@material-ui/core/colors'

const Home = () => {
    return (
        <div
            className="p-8 flex-grow flex flex-col mt-4"
            style={{
                backgroundColor: grey['50'],
            }}
        >
            <div className="h-0 flex-grow" style={{ overflowY: 'scroll' }}>
                와아아
            </div>
        </div>
    )
}

export default Home
