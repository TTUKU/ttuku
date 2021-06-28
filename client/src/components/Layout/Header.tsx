import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/menu_logo.png'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    background: #ffc000;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    user-select: none;
    .logo {
        cursor: pointer;
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
