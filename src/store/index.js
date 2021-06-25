import darkmode from './reducers/darkmode'
import favourites from './reducers/favourites'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    darkmode,
    favourites,
})

export default createStore(rootReducer)
