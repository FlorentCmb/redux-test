// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Redux
import store from './setup/StoreCreator'
// Components
import App from './App'
// Styles
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
serviceWorker.register()
