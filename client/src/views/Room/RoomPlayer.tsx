import React from 'react'
import { yellow } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rho from '../../assets/img/rho_left.png'
import { SquareImg } from 'react-aspect-ratio-img'

const RoomPlayer = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f00',
            }}
        >
            <div className="bg-white text-black flex flex-col h-full">
                <div
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 16,
                        paddingRight: 16,
                        background: yellow['700'],
                        fontSize: 24,
                        boxSizing: 'border-box',
                        position: 'relative',
                    }}
                    className="flex text-white justify-center items-center"
                >
                    <FontAwesomeIcon icon={['fas', 'crown']} />
                    <Typography
                        className="flex-grow"
                        align="center"
                        fontWeight={700}
                    >
                        방장이애오!
                    </Typography>
                    <svg
                        width={30}
                        height={26}
                        style={{
                            position: 'absolute',
                            bottom: -20,
                            right: 10,
                        }}
                    >
                        <path
                            d="M0.130496 25.1784L11.2786 0.0953149L29.5563 4.3878e-06L0.130496 25.1784Z"
                            fill={yellow['700']}
                        />
                    </svg>
                </div>
                <div
                    style={{
                        flexGrow: 1,
                        paddingLeft: 15,
                        paddingRight: 15,
                    }}
                >
                    <SquareImg src={rho} className="w-full h-full" />
                </div>
                <div style={{ margin: 15 }}>
                    <Typography fontSize={24} fontWeight={700}>
                        <span
                            style={{
                                background: '#263238',
                                color: '#fff',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            88
                        </span>
                        로쨩
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default RoomPlayer
