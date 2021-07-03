import React from 'react'
import { Button } from '@material-ui/core'

type Props = {
    text: string
    provider: string
    color: string
}

const LoginMethodButton: React.FC<Props> = ({ color, text, provider }) => {
    return (
        <Button
            style={{
                minWidth: 300,
                color: '#fff',
                background: color,
            }}
            href={`/api/auth/${provider}`}
        >
            {text}
        </Button>
    )
}

export default LoginMethodButton
