// Librairies
import React from 'react'
import { connect } from 'react-redux'
// Redux
import {switchToFr, switchToEng } from '.redux/actions/ActionsIndex'
// Components
import Translate from './features/translation/Translate'
// Styles
import './App.css'

const App = (props) => {

  const { switchToEng, switchToFr } = props
  const { language } = props.translation

  // Render
  return (
      <div>
        {language}
        <button onClick={() => switchToEng()}>{Translate('English', language)}</button>
        <button onClick={() => switchToFr()}>{Translate('French', language)}</button>
      </div>
  )
}

const mapStateToProps = state => ({
  translation: state.translation
})

const mapDispatchToProps = dispatch => ({
  switchToFr: () => dispatch(switchToFr()),
  switchToEng: () => dispatch(switchToEng())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)