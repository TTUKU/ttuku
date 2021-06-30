import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/logo.png'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    background: #ffffff;
    padding: 12px 40px;
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: center;
    position: sticky;
    width: 100vw;
    top: 0;

    .logo {
        cursor: pointer;
        height: 40px;
    }
`

const Header = () => {
    const router = useHistory()

    return (
        <>
            <Container className="border-b">
                <img
                    className="logo"
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push('/')}
                />
            </Container>
        </>
    )
}

export default Header
