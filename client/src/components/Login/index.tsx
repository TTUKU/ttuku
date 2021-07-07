import React from 'react'
import LoginMethodButton from './LoginMethodButton'
import { Backdrop, Button, Paper } from '@material-ui/core'

const LoginPage: React.FC<{ open: boolean; onClose: () => void }> = ({
    open,
    onClose,
}) => {
    return (
        <Backdrop
            open={open}
            style={{
                zIndex: 99999,
            }}
        >
            <div className="flex justify-center">
                <Paper
                    className="p-4 rounded flex flex-col gap-2"
                    // style={{ background: 'rgb(40,40,47)', color: '#fff' }}
                >
                    <div className="font-gugi text-3xl text-center">로그인</div>
                    <LoginMethodButton
                        color="#5865F2"
                        provider="discord"
                        text="디스코드로 로그인하기"
                        icon={['fab', 'discord']}
                    />
                    <Button onClick={onClose} variant="outlined">
                        닫기
                    </Button>
                </Paper>
            </div>
        </Backdrop>
    )
}

export default LoginPage
