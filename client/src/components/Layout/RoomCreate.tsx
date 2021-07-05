import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { userState } from '../../state'
import { socket } from '../../utils'

const RoomCreate: React.FC<{ close: () => void }> = ({ close }) => {
    const user = useRecoilValue(userState)
    if (!user) return <></>
    const [name, setName] = React.useState(`${user.nick}님의 방`)
    const [pw, setPw] = React.useState('')
    const [pCount, setPCount] = React.useState(8)

    return (
        <form
            className="p-4 flex flex-col gap-4"
            onSubmit={(e) => {
                e.preventDefault()
                socket.emit('createRoom', {
                    name,
                    password: pw,
                    playerCount: pCount,
                })
                close()
            }}
        >
            <TextField
                label="방 제목"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <TextField
                label="비밀번호"
                fullWidth
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                type="password"
                variant="outlined"
            />
            <TextField
                label="플레이어 수"
                fullWidth
                variant="outlined"
                type="number"
                required
                value={pCount}
                onChange={(e) => setPCount(Number(e.target.value))}
            />
            <Button variant="outlined" color="primary" type="submit">
                방 만들기
            </Button>
        </form>
    )
}

export default RoomCreate
