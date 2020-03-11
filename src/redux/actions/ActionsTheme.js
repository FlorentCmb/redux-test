// Import actions
import {
    SWITCH_TO_DARK_THEME,
    SWITCH_TO_LIGHT_THEME
} from './ActionsType'

// Actions creators
export const switchToDarkTheme = () => ({
    type: SWITCH_TO_DARK_THEME
})


export const switchToLightTheme = () => ({
    type: SWITCH_TO_LIGHT_THEME
})