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
// Styles
import './App.css'

// Functions
const uploadCounterValue = (value) => {
  localStorage.setItem('counterValue', JSON.stringify(value))
  console.log('Updated value : ', value)
}

const saveTheme = (color) => {
  localStorage.setItem('themeColor', JSON.stringify(color))
  console.log('Updated color : ', color)
}

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
        <button onClick={() => decrementCounter()}>-1</button>
        <input type='text' disabled value={counter.value} />
        <button onClick={() => incrementCounter()}>+1</button>
      </div>
      <button onClick={() => resetCounter()}>Reset</button>
      <button onClick={() => uploadCounterValue(counter.value)}>Upload</button>

      <p>Current theme is : {theme.color}</p>
      <button onClick={() => switchToDarkTheme()}>Dark</button>
      <button onClick={() => switchToLightTheme()}>Light</button>
      <button onClick={() => saveTheme(theme.color)}>Save theme</button>
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