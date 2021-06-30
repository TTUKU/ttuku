import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/logo.png'

const HomeCard = styled.div`
    background: #fff;
    color: #000;
    padding: 8px;
    border-radius: 4px;
`

const Home = () => {
    return (
        <div className="container mx-auto mt-4 grid grid-cols-3 gap-4 select-none">
            <div className="flex justify-center">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Home
