import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilValue } from "recoil";
import { userState } from "../../state";

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
    const user = useRecoilValue(userState)

    return (
        <>
            <Container className="border-b">
                <img
                    className="logo"
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push('/')}
                />
                <div>
                    {user === null ? null : user === false ? <Link to="/login">로그인</Link> : '로그아웃'}
                </div>
            </Container>
        </>
    )
}

export default Header
