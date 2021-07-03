import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/logo.png'
import { useHistory } from 'react-router-dom'
import UserMenu from './UserMenu'

const Container = styled.div`
    background: #ffffff;
    padding: 12px 40px;
    display: flex;
    align-items: center;
    user-select: none;
    position: sticky;
    width: 100vw;
    top: 0;
    justify-content: space-between;

    .logo {
        cursor: pointer;
        height: 40px;
    }
`

const Header = () => {
    const router = useHistory()

    return (
        <Container className="border-b select-none">
            <img
                className="logo"
                src={Logo}
                alt="Logo"
                onClick={() => router.push('/')}
            />
            <UserMenu />
        </Container>
    )
}

export default Header
