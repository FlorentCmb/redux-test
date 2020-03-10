// Import librairies
import { combineReducers } from 'redux'
// Import all reducers
import ReducerTranslation from './ReducerTranslation'

// Combined reducers exported
const mainReducer = combineReducers({
    translation: ReducerTranslation
})

export default mainReducer