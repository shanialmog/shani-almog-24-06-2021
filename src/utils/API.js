const currentWeather = require('./mocks/mockDataCurrent.json')
const weatherForecast = require('./mocks/mockDataForecast.json')
const searchLocation = require('./mocks/mockDataSearch.json')
const geolocationWeather = require('./mocks/mockDataGeolocation.json')

export const getData = async (path, params) => {
    const data = {}
    if (path === 'current') {
        data = currentWeather
    } else if (path === 'forecast') {
        data = weatherForecast
    } else if (path === 'search') {
        data = searchLocation
    } else {
        data = geolocationWeather
    }
    return data
}
