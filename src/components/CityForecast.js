import CityForecastItem from './CityForecastItem'

const CityForecast = ({ dailyForecasts }) => {

    return (
        <div className='city-forecast-cont'>
            {
                dailyForecasts.map((day) =>
                    <CityForecastItem
                        key={day.EpochDate}
                        dailyForecast={day}
                    />
                )
            }
        </div>
    )
}

export default CityForecast
