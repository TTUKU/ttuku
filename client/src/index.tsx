import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import './assets/style.scss'
import { RecoilRoot } from 'recoil'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'react-aspect-ratio-img/css/style.css'

Sentry.init({
    dsn: 'https://e56a76a6dd02433bbc75fbf4c2305ecc@sentry.pikokr.dev/2',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
})

library.add(fab, fas)

ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>,
    document.getElementById('root'),
)
