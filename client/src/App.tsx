import React from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'
import LoginPage from './views/Login'

const App = () => {
    return (
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
        </Layout>
    )
}

export default App
