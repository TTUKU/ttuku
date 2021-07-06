import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Callback from './views/Callback'
import { Alert, Backdrop, CircularProgress, Snackbar } from '@material-ui/core'
import { socket } from './utils'
import { room, rooms, stats, userState } from './state'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { User } from './typings'
import NotFound from './views/NotFound'
import Layout from './components/Layout'
import Room from './views/Room'
import { Room as RoomType } from './typings'

let currentRoomId = ''

const App = () => {
    const [connected, setConnected] = React.useState(false)
    const setPlayerCount = useSetRecoilState(stats.playerCount)
    const setUser = useSetRecoilState(userState)
    const [errorMsg, setErrorMsg] = React.useState('')
    const location = useLocation()
    const [currentRoom, setCurrentRoom] = useRecoilState(room)
    const history = useHistory()
    const setRooms = useSetRecoilState(rooms)
    const [alertOpen, setAlertOpen] = React.useState(false)
    const [alertSeverity, setAlertSeverity] = React.useState('info')
    const [alertMessage, setAlertMessage] = React.useState('')

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
            currentRoomId = data.id
            history.push('/room')
        })
        socket.on('leaveRoom', () => {
            setCurrentRoom(null)
            currentRoomId = ''
            history.push('/')
        })
        socket.on('updateRoomList', (data: RoomType[]) => {
            setRooms(data)
            if (currentRoomId) {
                setCurrentRoom(
                    data.find((x: any) => x.id === currentRoomId) || null,
                )
            }
        })

        socket.on('alert', (data) => {
            setAlertMessage(data.message)
            setAlertSeverity(data.type)
            setAlertOpen(true)
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
            <Snackbar
                autoHideDuration={6000}
                open={alertOpen}
                onClose={() => setAlertOpen(false)}
            >
                <Alert
                    onClose={() => setAlertOpen(false)}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    severity={alertSeverity}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
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
