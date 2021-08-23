import React from 'react'
import { Create } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { InputBase } from '@material-ui/core'

const ChatArea = () => {
    return (
        <div
            style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}
        >
            <div
                style={{
                    height: 200,
                    width: '100%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 30,
                    paddingLeft: 50,
                    background: grey['50'],
                }}
            >
                <div
                    style={{
                        overflowY: 'scroll',
                        height: '100%',
                    }}
                >
                    {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20,
                    ].map((x, i) => (
                        <div key={i}>
                            <span style={{ fontWeight: 700 }}>맛젤</span> : {x}
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    paddingLeft: 15,
                    paddingTop: 10,
                    paddingRight: 15,
                    paddingBottom: 10,
                    boxSizing: 'border-box',
                    display: 'flex',
                    background: grey['50'],
                    borderRadius: 100,
                    gap: 10,
                    alignItems: 'center',
                }}
            >
                <Create width={18} height={18} />
                <InputBase
                    placeholder="채팅을 입력해 주세요"
                    className="flex-grow"
                />
            </div>
        </div>
    )
}

export default ChatArea
