import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import LoginPage from './views/Login'
import Callback from './views/Callback'
import { CircularProgress, Dialog } from '@material-ui/core'
import { socket } from './utils'
import { stats, userState } from './state'
import { useSetRecoilState } from 'recoil'
import { User } from './typings'

const App = () => {
    const [connected, setConnected] = React.useState(false)
    const setPlayerCount = useSetRecoilState(stats.playerCount)
    const setUser = useSetRecoilState(userState)
    const [errorMsg, setErrorMsg] = React.useState('')

    useEffect(() => {
        // socket.once('unauthenticated', () => {})
        socket.on('init', (data: { user: User }) => {
            setConnected(true)
            setUser(data.user)
        })
        socket.on('playerCount', (count: number) => {
            setPlayerCount(count)
        })
        socket.on('alreadyConnected', () => {
            setErrorMsg('이미 이 계정으로 접속되어 있습니다.')
        })
        socket.on('unauthenticated', () => {
            setConnected(true)
            setUser(false)
        })
        socket.connect()
    }, [])

    return (
        <>
            <Dialog open={!connected || !socket.connected || !!errorMsg}>
                {errorMsg ? (
                    <div style={{ margin: 15 }}>{errorMsg}</div>
                ) : (
                    <CircularProgress style={{ margin: 15 }} />
                )}
            </Dialog>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/callback" component={Callback} />
        </>
    )
}

export default App
