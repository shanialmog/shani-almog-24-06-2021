import darkmode from './reducers/darkmode'
import favourites from './reducers/favourites'
import cities from './reducers/cities'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    darkmode,
    favourites,
    cities
})

export default createStore(rootReducer)
