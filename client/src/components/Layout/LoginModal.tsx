import React from 'react'
import { useRecoilState } from 'recoil'
import { SLoginMenuOpen } from '~/state'
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core'

const LoginModal = () => {
    const [open, setOpen] = useRecoilState(SLoginMenuOpen)

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>로그인</DialogTitle>
            <DialogContent>
                <Button fullWidth href="/auth/discord" variant="outlined">
                    디스코드로 로그인하기
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal
