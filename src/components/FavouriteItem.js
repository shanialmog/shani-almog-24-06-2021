import { useEffect, useState } from 'react'
import FavouriteButton from './FavouriteButton'
import { getCityWeather, getCityData } from '../utils/API'


const FavouriteItem = ({ cityKey }) => {
    const [cityData, setCityData] = useState({})
    const [cityWeather, setCityWeather] = useState({})

    useEffect(() => {
        const init = async () => {
            const cityWeatherData = await getCityWeather(cityKey)
            // API returns an array, taking the first item
            setCityWeather(cityWeatherData[0])
            const cityData = await getCityData(cityKey)
            const FavouriteCity = cityData.filter((city) => city.Key === cityKey)
            setCityData(FavouriteCity[0])
        }
        init()
    }, [cityKey])

    const cityName = cityData.LocalizedName
    const countryId = cityData?.Country?.ID

    const { WeatherText } = cityWeather

    return (
        <div>
            <FavouriteButton cityKey={cityKey} />
            {cityKey}
            {cityName}
            {countryId}
            {WeatherText}
        </div>
    )
}

export default FavouriteItem