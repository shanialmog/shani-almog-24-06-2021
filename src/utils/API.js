const cityWeather = require('./mocks/mockDataCityWeather.json')
const cityWeatherForecast = require('./mocks/mockDataForecast.json')
const cityData = require('./mocks/mockDataCity.json')
const citiesSearchResults = require('./mocks/mockDataSearch.json')
// const geolocationWeather = require('./mocks/mockDataGeolocation.json')

const API_KEY = 'FkElY0ViZl9ZgGR3xPMzaUfzlkxEne30'
const BASE_URL = 'https://dataservice.accuweather.com'
const USE_MOCK_DATA = false

const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
})

const fetchOptions = {
    headers: {}
}

export const getCityWeather = async (cityKey) => {
    if (USE_MOCK_DATA) {
        await sleep(200)
        return cityWeather
    }
    const data = await fetch(`${BASE_URL}/currentconditions/v1/${cityKey}/?apikey=${API_KEY}`, fetchOptions)
    return data.json()
}

export const getCityForecast = async (cityKey) => {
    if (USE_MOCK_DATA) {
        return cityWeatherForecast
    }
    const data = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?metric=true&apikey=${API_KEY}`, fetchOptions)
    return data.json()
}

export const getCityData = async (cityKey) => {
    if (USE_MOCK_DATA) {
        return cityData
    }
    const data = await fetch(`${BASE_URL}/locations/v1/${cityKey}?apikey=${API_KEY}`, fetchOptions)
    return data.json()
}

export const searchCities = async (query) => {
    // This endpoint doesn't have CORS headers so, using mock data
    // const data = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete?q=${query}?apikey=${API_KEY}`, fetchOptions)
    // return data.json()
    return citiesSearchResults
}