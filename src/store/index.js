import toggles from './reducers/toggles'
import favourites from './reducers/favourites'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    toggles,
    favourites
})

export default createStore(rootReducer)
