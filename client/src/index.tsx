import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import './assets/style.scss'
import { RecoilRoot } from 'recoil'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>,
    document.getElementById('root'),
)
