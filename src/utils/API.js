const cityWeather = require('./mocks/mockDataCityWeather.json')
const cityWeatherForecast = require('./mocks/mockDataForecast.json')
const cityData = require('./mocks/mockDataCity.json')
const citiesSearchResults = require('./mocks/mockDataSearch.json')
// const geolocationWeather = require('./mocks/mockDataGeolocation.json')

const API_KEY = process.env.API_KEY || 'omsRXwZPjFWGcuitCDXqBGduyZfaAx0c'
const BASE_URL = 'https://dataservice.accuweather.com'
const USE_MOCK_DATA = false

const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
})

export const getCityWeather = async (cityKey) => {
    if (USE_MOCK_DATA) {
        await sleep(200)
        return cityWeather
    }
    const data = await fetch(`${BASE_URL}/currentconditions/v1/${cityKey}/?apikey=${API_KEY}`)
    return data.json()
}

export const getCityForecast = async (cityKey) => {
    if (USE_MOCK_DATA) {
        return cityWeatherForecast
    }
    const data = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?metric=true&apikey=${API_KEY}`)
    return data.json()
}

export const getCityData = async (cityKey) => {
    if (USE_MOCK_DATA) {
        return cityData
    }
    const data = await fetch(`${BASE_URL}/locations/v1/${cityKey}?apikey=${API_KEY}`)
    return data.json()
}

export const searchCities = async (query) => {
    if (USE_MOCK_DATA) {
        return citiesSearchResults
    }
    const data = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete?q=${query}&apikey=${API_KEY}`)
    return data.json()
}
