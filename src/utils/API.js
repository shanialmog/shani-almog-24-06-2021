const cityWeather = require('./mocks/mockDataCityWeather.json')
const cityWeatherForecast = require('./mocks/mockDataForecast.json')
const searchCity = require('./mocks/mockDataSearch.json')
const geolocationWeather = require('./mocks/mockDataGeolocation.json')

export const getCityWeather = async (cityKey) => {
    return cityWeather
}

export const getCityForecast = async (cityKey) => {
    return cityWeatherForecast
}

export const getCityData = async (cityKey) => {
    return searchCity
}