import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { useRecoilValue } from 'recoil'
import { tokenState } from './state'

const Root = () => {
    const token = useRecoilValue(tokenState)

    useEffect(() => {
        if (!token) return
        console.log(token)
    }, [token])

    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

export default Root
