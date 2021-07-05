import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Callback from './views/Callback'
import { Backdrop, CircularProgress } from '@material-ui/core'
import { socket } from './utils'
import { room, rooms, stats, userState } from './state'
import { useSetRecoilState } from 'recoil'
import { User } from './typings'
import NotFound from './views/NotFound'
import Layout from './components/Layout'
import Room from './views/Room'

const App = () => {
    const [connected, setConnected] = React.useState(false)
    const setPlayerCount = useSetRecoilState(stats.playerCount)
    const setUser = useSetRecoilState(userState)
    const [errorMsg, setErrorMsg] = React.useState('')
    const location = useLocation()
    const setCurrentRoom = useSetRecoilState(room)
    const history = useHistory()
    const setRooms = useSetRecoilState(rooms)

    let LayoutComponent

    switch (location.pathname) {
        case '/callback':
            LayoutComponent = 'div'
            break
        default:
            LayoutComponent = Layout
            break
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
        socket.on('joinRoom', (data) => {
            setCurrentRoom(data)
            history.push('/room')
        })
        socket.on('updateRoomList', (data) => {
            setRooms(data)
        })
        setTimeout(() => socket.connect(), 1000)
    }, [])

    return (
        <LayoutComponent>
            <Backdrop
                open={!connected || !socket.connected || !!errorMsg}
                style={{ zIndex: 999999 }}
            >
                {errorMsg ? (
                    <div style={{ margin: 15 }}>{errorMsg}</div>
                ) : (
                    <CircularProgress style={{ color: '#fff' }} />
                )}
            </Backdrop>
            {connected ? (
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/room" component={Room} />
                    <Route exact path="/callback" component={Callback} />
                    <Route component={NotFound} />
                </Switch>
            ) : (
                <div className="container mx-auto">Loading....</div>
            )}
        </LayoutComponent>
    )
}

export default App
