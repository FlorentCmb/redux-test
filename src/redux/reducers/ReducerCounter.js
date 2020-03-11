// Import all actions
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
} from '../actions/ActionsType'

// Initial state
const initialState = {
    value: JSON.parse(localStorage.getItem('counterValue')) || 5
}

// Reducer for translation
const ReducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return ({
                ...state,
                value: state.value + 1
            })
        case DECREMENT_COUNTER:
            return ({
                ...state,
                value: state.value - 1
            })
        case RESET_COUNTER:
            return ({
                ...state,
                value: 0
            })
        default:
            return state
    }
}

export default ReducerCounter