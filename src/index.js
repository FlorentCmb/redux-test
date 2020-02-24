// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
// Components
import App from './App'
// Styles
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.querySelector('#root'))
serviceWorker.register()
