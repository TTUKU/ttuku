import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '~/routes'

const App = () => {
    const theme = createTheme({})

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
