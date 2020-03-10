// Import all actions
import {
    SWITCH_TO_FR,
    SWITCH_TO_ENG,
} from '../actions/ActionsType'

// Initial state
const initialState = {
    language: 'English'
}

// Reducer for translation
const ReducerTranslation = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_FR:
            return {
                ...state,
                language: 'French'
            }
        case SWITCH_TO_ENG:
            return {
                ...state,
                language: 'English'
            }
        default:
            return state
    }
}

export default ReducerTranslation