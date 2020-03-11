// Import librairies
import { combineReducers } from 'redux'
// Import all reducers
import ReducerCounter from './ReducerCounter'
import ReducerTheme from './ReducerTheme'

// Combined reducers exported
const mainReducer = combineReducers({
    counter: ReducerCounter,
    theme: ReducerTheme
})

export default mainReducer