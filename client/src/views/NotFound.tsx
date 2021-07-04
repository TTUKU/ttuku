import React, { useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'

const NotFound = () => {
    const ref = React.useRef<any>()

    useEffect(() => {
        if (!ref) return
        FOG({
            el: ref.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            THREE,
        })
    }, [ref])

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80,
            }}
            ref={ref}
        >
            404 NOT FOUND
        </div>
    )
}

export default NotFound
