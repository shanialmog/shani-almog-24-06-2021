import {
    CITY_DATA,
} from '../actions'

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
        case CITY_DATA:
            return state
        default:
            return state
    }
}

export default cities
