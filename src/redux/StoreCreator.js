// Import librairies
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
// Import reducer
import mainReducer from './reducers/ReducerIndex'

const logger = createLogger()

// createStore take 2 parameters : the main reducer, and a middleware
const store = createStore(mainReducer, applyMiddleware(logger))

export default store