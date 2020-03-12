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

// Functions
const uploadCounterValue = (value) => {
  localStorage.setItem('counterValue', JSON.stringify(value))
  console.log('Updated value : ', value)
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
      <Button click={() => switchToLightTheme()} color={theme.color} text="Light" />
      <Button click={() => switchToDarkTheme()} color={theme.color} text="Dark" />

      <select>
        
      </select>

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