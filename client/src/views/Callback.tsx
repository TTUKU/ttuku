import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Callback = () => {
    const location = useLocation()
    useEffect(() => {
        const query = new URLSearchParams(location.search)
        console.log(query.get('token'))
    }, [])

    return <div className="container mx-auto">로그인 처리중...</div>
}

export default Callback
