import React from 'react'
import styled from 'styled-components'

type Props = {
    text: string
    provider: string
    color: string
}

const Container = styled.a<{ color: string }>`
    border-color: ${({ color }) => color};
    color: ${({ color }) => color};
    min-width: 200px;
`

const LoginMethodButton: React.FC<Props> = ({ color, text }) => {
    return (
        <Container className="p-2 rounded border" color={color}>
            {text}
        </Container>
    )
}

export default LoginMethodButton
