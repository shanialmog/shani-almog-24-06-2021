import toggles from './reducers/toggles'
import favourites from './reducers/favourites'
import cities from './reducers/cities'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    toggles,
    favourites,
    cities
})

export default createStore(rootReducer)
