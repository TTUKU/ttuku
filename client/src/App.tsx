import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '~/routes'
// import { useSetRecoilState } from 'recoil'
// import axios from 'axios'
// import { SLoggedIn, SUser } from '~/state'
// import { TUser } from '~/typings'

const App = () => {
    // const setLoggedIn = useSetRecoilState(SLoggedIn)
    // const setUser = useSetRecoilState(SUser)

    const theme = createTheme({})
    // React.useEffect(() => {
    //     ;(async () => {
    //         try {
    //             const { data: user } = await axios.get<TUser>('/api/users/@me')
    //             setLoggedIn(true)
    //             setUser(user)
    //         } catch (e) {
    //             setLoggedIn(false)
    //             setUser(null)
    //         }
    //     })()
    //     // eslint-disable-next-line
    // }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    {routes.map((x, i) => (
                        <Route {...x} key={i} />
                    ))}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
