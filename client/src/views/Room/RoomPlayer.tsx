import React from 'react'
import { yellow } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rho from '../../assets/img/rho_left.png'

const RoomPlayer = () => {
    return (
        <div className="bg-white text-black flex flex-col">
            <div
                style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                    background: yellow['700'],
                    fontSize: 24,
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
            </div>
            <img
                style={{
                    marginTop: 15,
                    marginLeft: 15,
                    marginRight: 15,
                    width: 'auto',
                    height: 'auto',
                }}
                src={rho}
                alt="avatar"
            />
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
    )
}

export default RoomPlayer
