import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import LoginPage from './views/Login'
import Callback from './views/Callback'
import { CircularProgress, Dialog } from '@material-ui/core'
import { socket } from './utils'
import { stats } from './state'
import { useRecoilState } from 'recoil'

const App = () => {
    const [connected, setConnected] = React.useState(false)
    const [, setPlayerCount] = useRecoilState(stats.playerCount)

    useEffect(() => {
        socket.once('connect', () => {
            setConnected(true)
        })
        socket.on('playerCount', (count: number) => {
            setPlayerCount(count)
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
