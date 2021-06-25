import {
    ADD_FAVOURITE,
    REMOVE_FAVOURITE
} from '../actions'

const initialState = new Set(['www', 'zzz'])

const favourites = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            state.add(action.payload)
            return new Set(state)
        case REMOVE_FAVOURITE:
            state.delete(action.payload)
            return new Set(state)
        default:
            return state
    }
}

export default favourites
