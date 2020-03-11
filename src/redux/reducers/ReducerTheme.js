// Import actions
import {
    SWITCH_TO_DARK_THEME,
    SWITCH_TO_LIGHT_THEME
} from '../actions/ActionsType'

// Initial state
const initialState = {
    color: JSON.parse(localStorage.getItem('themeColor')) || 'light'
}

// Reducer for theme
const ReducerTheme = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_DARK_THEME:
            return ({
                ...state,
                color: 'dark'
            })
        case SWITCH_TO_LIGHT_THEME:
            return ({
                ...state,
                color: 'light'
            })
        default:
            return state
    }
}

export default ReducerTheme