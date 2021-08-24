import React from 'react'
import { Drawer } from '@material-ui/core'
import { SIDEBAR_WIDTH } from '~/constants'
import { useRecoilState } from 'recoil'
import { SDrawerOpen } from '~/state'

const Sidebar = () => {
    const [open, setOpen] = useRecoilState(SDrawerOpen)

    const content = <>와아앙</>

    return (
        <>
            <Drawer
                onClose={() => setOpen(false)}
                variant="temporary"
                open={open}
                anchor="right"
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: SIDEBAR_WIDTH,
                    },
                }}
            >
                {content}
            </Drawer>
            <Drawer
                variant="permanent"
                open
                anchor="right"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: SIDEBAR_WIDTH,
                    },
                }}
            >
                {content}
            </Drawer>
        </>
    )
}

export default Sidebar
