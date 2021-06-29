import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/menu_logo.png'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    background: #5865f2;
    padding: 12px 40px;
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: center;

    .logo {
        cursor: pointer;
        height: 40px;
    }
`

const Header = () => {
    const router = useHistory()

    return (
        <>
            <Container>
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
