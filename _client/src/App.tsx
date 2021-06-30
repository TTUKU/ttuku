import React from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'

const App = () => {
    return (
        <Layout>
            <Route exact path="/" component={Home} />
        </Layout>
    )
}

export default App
