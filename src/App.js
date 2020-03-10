// Librairies
import React from 'react'
import { connect } from 'react-redux'
// Redux
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from './redux/actions/ActionsIndex'
// Components
// Styles
import './App.css'

// Functions
const uploadCounterValue = (counter) => {
  localStorage.setItem('value', JSON.stringify(counter))
  console.log('New value saved : ', counter)
}

// Render
const App = (props) => {

  const { counter, incrementCounter, decrementCounter, resetCounter } = props

  // Render
  return (
      <div>
        <div>
          <button onClick={() => decrementCounter()}>-1</button>
          <input type='text' disabled value={counter.value} />
          <button onClick={() => incrementCounter()}>+1</button>
        </div>
        <button onClick={() => resetCounter()}>Reset</button>
        <button onClick={() => uploadCounterValue(counter)}>Upload</button>
      </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
  resetCounter: () => dispatch(resetCounter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)