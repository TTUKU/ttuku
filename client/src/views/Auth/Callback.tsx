import React from 'react'
import axios from 'axios'

const Callback = () => {
    React.useEffect(() => {
        ;(async () => {
            const params = new URLSearchParams(window.location.search)
            const token = params.get('token')
            if (!token) return (window.location.href = '/')
            await axios.get('/api/users/@me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            localStorage.token = token
            window.location.href = '/'
        })()
    }, [])

    return <div>CALLBACK</div>
}

export default Callback
