import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import './assets/style.scss'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>,
    document.getElementById('root'),
)
