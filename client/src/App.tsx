import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '~/routes'
import { RecoilRoot } from 'recoil'

const App = () => {
    const theme = createTheme({})

    return (
        <RecoilRoot>
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
        </RecoilRoot>
    )
}

export default App
