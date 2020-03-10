// Import librairies
import { combineReducers } from 'redux'
// Import all reducers
import ReducerCounter from './ReducerCounter'

// Combined reducers exported
const mainReducer = combineReducers({
    counter: ReducerCounter
})

export default mainReducer