import { ADD_CITIES_DATA } from '../actions'

// This reducer is used as a cache for city names by city key
// to avoid making many API calls

const initialState = {
    '215854': {
        Key: '215854',
        LocalizedName: 'Tel Aviv',
        Country: {
            ID: 'IL',
            LocalizedName: 'Israel'
        }
    }
}

const cities = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITIES_DATA:
            const newItems = {}
            for (const city of action.payload) {
                newItems[city.Key] = {
                    Key: city.Key,
                    LocalizedName: city.LocalizedName,
                    Country: {
                        ID: city.Country.ID,
                        LocalizedName: city.Country.LocalizedName
                    }
                }
            }
            return {
                ...state,
                ...newItems
            }
        default:
            return state
    }
}

export default cities
