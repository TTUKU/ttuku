import React from 'react'
import LoginMethodButton from './LoginMethodButton'
import Layout from '../../components/Layout'

const LoginPage = () => {
    return (
        <Layout>
            <div className="flex justify-center">
                <div className="p-4 border rounded flex flex-col gap-2">
                    <div className="font-gugi text-3xl text-center">로그인</div>
                    <LoginMethodButton
                        color="#5865F2"
                        provider="discord"
                        text="디스코드"
                    />
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage
