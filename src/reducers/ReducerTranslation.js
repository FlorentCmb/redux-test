// Import all actions
import {
    SWITCH_TO_FR,
    SWITCH_TO_ENG,
} from '../actions/ActionsType'

// Initial state
const initialState = {
    language: 'eng'
}

// Reducer for translation
const ReducerTranslation = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_FR:
            return {
                ...state,
                language: 'fr'
            }
        case SWITCH_TO_ENG:
            return {
                ...state,
                language: 'eng'
            }
        default:
            return state
    }
}

export default ReducerTranslation