import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { useRecoilState, useRecoilValue } from 'recoil'
import { tokenState, userState } from './state'

const Root = () => {
    const token = useRecoilValue(tokenState)
    const [user, setUser] = useRecoilState(userState)

    useEffect(() => {
        if (!token) return setUser(false)
        console.log(token)
    }, [token, user, setUser])

    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

export default Root
