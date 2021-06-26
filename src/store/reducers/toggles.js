import { TOGGLE_DARKMODE } from '../actions'
import { TOGGLE_CELSIUS } from '../actions'

const initialState = {
    darkmode: false,
    isCelsius: true
}

const toggles = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARKMODE:
            return {
                ...state,
                darkmode: !state.darkmode
            }
        case TOGGLE_CELSIUS:
            return {
                ...state,
                isCelsius: !state.isCelsius
            }
        default:
            return state
    }
}

export default toggles
