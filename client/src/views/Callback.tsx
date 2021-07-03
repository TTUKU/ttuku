import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Callback = () => {
    const location = useLocation()
    const [msg, setMsg] = useState('로그인 처리중...')

    useEffect(() => {
        ;(async () => {
            const fail = () => {
                setMsg('로그인 실패.')
            }
            const query = new URLSearchParams(location.search)
            const token = query.get('token')
            if (!token) return fail()
            try {
                const { data: user } = await axios.get('/api/users/@me')
                console.log(user)
            } catch {
                return fail()
            }
        })()
    }, [])

    return <div className="container mx-auto">{msg}</div>
}

export default Callback
