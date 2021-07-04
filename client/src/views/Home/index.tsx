import React from 'react'
import Layout from '../../components/Layout'
import { useRecoilValue } from 'recoil'
import { stats } from '../../state'

const Home = () => {
    const playerCount = useRecoilValue(stats.playerCount)

    return <Layout>현재 {playerCount}명 접속중</Layout>
}

export default Home
