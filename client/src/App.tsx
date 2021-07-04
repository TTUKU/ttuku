import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import LoginPage from './views/Login'
import Callback from './views/Callback'
import { CircularProgress, Dialog, DialogContent } from '@material-ui/core'
import { socket } from './utils'

const App = () => {
    const [connected, setConnected] = React.useState(false)

    useEffect(() => {
        socket.once('connect', () => {
            setConnected(true)
        })
        socket.connect()
    }, [])

    return (
        <>
            <Dialog open={!connected && !socket.connected}>
                <CircularProgress style={{ margin: 30 }} />
            </Dialog>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/callback" component={Callback} />
        </>
    )
}

export default App
