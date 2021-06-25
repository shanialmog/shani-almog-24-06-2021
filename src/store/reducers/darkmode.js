import { TOGGLE_DARKMODE } from '../actions'

const initialState = true

const darkmode = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARKMODE:
            return !state
        default:
            return state
    }
}

export default darkmode
