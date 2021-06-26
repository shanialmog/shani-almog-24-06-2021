const cityWeather = require('./mocks/mockDataCityWeather.json')
const cityWeatherForecast = require('./mocks/mockDataForecast.json')
const cityData = require('./mocks/mockDataSearch.json')
const citiesSearchResults = require('./mocks/mockDataSearch.json')
const geolocationWeather = require('./mocks/mockDataGeolocation.json')

const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
})

export const getCityWeather = async (cityKey) => {
    await sleep(600)
    return cityWeather
}

export const getCityForecast = async (cityKey) => {
    return cityWeatherForecast
}

export const getCityData = async (cityKey) => {
    return cityData
}

export const searchCities = async (query) => {
    return citiesSearchResults
}