import {
    ADD_FAVOURITE,
    REMOVE_FAVOURITE
} from '../actions'

const STORAGE_KEY = 'weather_favourites'

let initialState
try {
    const localStorageState = localStorage.getItem(STORAGE_KEY)
    initialState = localStorageState ? new Set(JSON.parse(localStorageState)) : new Set([])
} catch (e) {
    console.error(e)
    initialState = new Set([])
}

const persist = (state) => {
    if (!localStorage) {
        return
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state)))
}

const favourites = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case ADD_FAVOURITE:
            state.add(action.payload)
            newState = new Set(state)
            persist(newState)
            return newState
        case REMOVE_FAVOURITE:
            state.delete(action.payload)
            newState = new Set(state)
            persist(newState)
            return newState
        default:
            return state
    }
}

export default favourites
