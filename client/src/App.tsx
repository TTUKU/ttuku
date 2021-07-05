import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Callback from './views/Callback'
import { Backdrop, CircularProgress } from '@material-ui/core'
import { socket } from './utils'
import { stats, userState } from './state'
import { useSetRecoilState } from 'recoil'
import { User } from './typings'
import NotFound from './views/NotFound'
import Layout from './components/Layout'

const App = () => {
    const [connected, setConnected] = React.useState(false)
    const setPlayerCount = useSetRecoilState(stats.playerCount)
    const setUser = useSetRecoilState(userState)
    const [errorMsg, setErrorMsg] = React.useState('')
    const location = useLocation()

    let LayoutComponent

    switch (location.pathname) {
        default:
            LayoutComponent = Layout
    }

    useEffect(() => {
        if (window.location.pathname === '/callback') {
            setConnected(true)
            return
        }
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
        setTimeout(() => socket.connect(), 1000)
    }, [])

    return (
        <LayoutComponent>
            <Backdrop open={!connected || !socket.connected || !!errorMsg}>
                {errorMsg ? (
                    <div style={{ margin: 15 }}>{errorMsg}</div>
                ) : (
                    <CircularProgress style={{ color: '#fff' }} />
                )}
            </Backdrop>
            {connected ? (
                <Switch>
                    <Route exact path="/callback" component={Callback} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            ) : (
                <div className="container mx-auto">Loading....</div>
            )}
        </LayoutComponent>
    )
}

export default App
