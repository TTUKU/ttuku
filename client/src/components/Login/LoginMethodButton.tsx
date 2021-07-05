import React from 'react'
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
    text: string
    provider: string
    color: string
    icon: IconProp
}

const LoginMethodButton: React.FC<Props> = ({
    color,
    text,
    provider,
    icon,
}) => {
    return (
        <Button
            style={{
                minWidth: 300,
                color: '#fff',
                background: color,
            }}
            href={`/api/auth/${provider}`}
            startIcon={<FontAwesomeIcon icon={icon} className="mr-2" />}
        >
            {text}
        </Button>
    )
}

export default LoginMethodButton
