import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import { RecoilRoot } from 'recoil'

if (localStorage.token) {
    axios.defaults.headers[
        'common'
    ].Authorization = `Bearer ${localStorage.token}`
}

ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
    document.querySelector('#root'),
)
