import React from 'react'
import styled from 'styled-components'

const HomeCard = styled.div`
    background: #fff;
    color: #000;
    padding: 8px;
    border-radius: 4px;
`

const Home = () => {
    return (
        <div className="container mx-auto mt-4 grid grid-cols-3 gap-4 select-none">
            <HomeCard className="col-span-2">와아</HomeCard>
            <HomeCard>로그인</HomeCard>
        </div>
    )
}

export default Home
