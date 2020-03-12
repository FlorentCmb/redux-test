// Librairies
import React from 'react'
import { connect } from 'react-redux'
// Redux
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  switchToDarkTheme,
  switchToLightTheme
} from './redux/actions/ActionsIndex'
// Components
import Button from './components/Button'
// Styles
import './App.css'

// Render
const App = (props) => {

  const {
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
    theme,
    switchToDarkTheme,
    switchToLightTheme
  } = props

  // Render
  return (
    <div className={`App App-${theme.color}`}>
      <div>
        <Button click={() => decrementCounter()} color={theme.color} text="-1" />
        <input type='text' disabled value={counter.value} />
        <Button click={() => incrementCounter()} color={theme.color} text="+1" />
      </div>
      <Button click={() => resetCounter()} color={theme.color} text="Reset Counter" />

      <p>Current theme is : {theme.color}</p>
      <Button click={() => switchToLightTheme()} color={theme.color} text="Light" />
      <Button click={() => switchToDarkTheme()} color={theme.color} text="Dark" />
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
  resetCounter: () => dispatch(resetCounter()),
  switchToDarkTheme: () => dispatch(switchToDarkTheme()),
  switchToLightTheme: () => dispatch(switchToLightTheme()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)