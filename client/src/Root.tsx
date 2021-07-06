import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
// import { SnackbarProvider } from 'notistack'
// import { useRecoilValue } from 'recoil'
// import { tokenState } from './state'

const Root = () => {
    // const [user, setUser] = useRecoilState(userState)
    //
    // useEffect(() => {
    //     if (!token) return setUser(false)
    //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
    //     ;(async () => {
    //         try {
    //             const { data: user } = await axios.get('/api/users/@me')
    //             setUser(user)
    //         } catch {
    //             setUser(false)
    //         }
    //     })()
    // }, [token])

    const theme = createTheme({
        palette: {
            background: {
                default: '#000',
                paper: '#fff',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Root
