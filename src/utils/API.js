const cityWeather = require('./mocks/mockDataCityWeather.json')
const cityWeatherForecast = require('./mocks/mockDataForecast.json')
const searchCity = require('./mocks/mockDataSearch.json')
const geolocationWeather = require('./mocks/mockDataGeolocation.json')

export const getData = async (path, params) => {
    let data = {}
    if (path === 'currentconditions') {
        data = cityWeather
    } else if (path === 'forecasts') {
        data = cityWeatherForecast
    } else if (path === 'autocomplete') {
        data = searchCity
    } else {
        data = geolocationWeather
    }
    return data
}
