import React from 'react'
import styled from 'styled-components'
import Logo from '~/assets/img/logo.png'

const Container = styled.div``

const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="Logo" />
        </Container>
    )
}

export default Header
