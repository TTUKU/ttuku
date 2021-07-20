import React from 'react'
import { yellow } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RoomPlayer = () => {
    return (
        <div className="bg-white text-black">
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
        </div>
    )
}

export default RoomPlayer
