import React from 'react'
import { grey } from '@material-ui/core/colors'
import { Divider, Typography } from '@material-ui/core'
import patch from '../../patch.json'

const Home = () => {
    return (
        <div
            className="p-8 flex-grow flex flex-col mt-4"
            style={{
                backgroundColor: grey['50'],
            }}
        >
            <div
                className="h-0 flex-grow flex flex-col p-4"
                style={{ overflowY: 'scroll', gap: 35 }}
            >
                {patch.map((x, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-end mb-2">
                            <Typography fontSize={34} fontWeight={700}>
                                {x.title}
                            </Typography>
                            <Typography
                                fontWeight={700}
                                color={grey['400']}
                                fontSize={20}
                            >
                                {x.date}
                            </Typography>
                        </div>
                        <Divider
                            style={{
                                borderColor: '#000',
                            }}
                        />
                        <ul
                            className="list-disc ml-6 mt-4"
                            style={{ fontSize: 24 }}
                        >
                            {x.content.map((y, j) => (
                                <li key={j}>{y}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
