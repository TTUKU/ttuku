import React from 'react'
import { grey } from '@material-ui/core/colors'
import { Divider, Typography } from '@material-ui/core'

const Home = () => {
    return (
        <div
            className="p-8 flex-grow flex flex-col mt-4"
            style={{
                backgroundColor: grey['50'],
            }}
        >
            <div className="h-0 flex-grow p-4" style={{ overflowY: 'scroll' }}>
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <Typography fontSize={34} fontWeight={700}>
                            2021년 7월 7일 업데이트 패치노트
                        </Typography>
                        <Typography
                            fontWeight={700}
                            color={grey['400']}
                            fontSize={20}
                        >
                            2021.07.07 수요일
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
                        <li>파링이가 더 귀여워졌습니다.</li>
                        <li>키뮤도 더 귀여워졌습니다.</li>
                        <li>맛젤은 더 맛있어졌씁니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
