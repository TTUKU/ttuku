import React from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'
import LoginPage from './views/Login'
import Callback from './views/Callback'

const App = () => {
    return (
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/callback" component={Callback} />
        </Layout>
    )
}

export default App
