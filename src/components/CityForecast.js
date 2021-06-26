import CityForecastItem from './CityForecastItem'
import Typography from '@material-ui/core/Typography'

const CityForecast = ({ dailyForecasts }) => {

    return (
        <div className='city-forecast-container'>
            <Typography color='textSecondary' variant='h5' component='h2' gutterBottom>
                Forecast
            </Typography>
            <div className='city-forecast-items'>
                {
                    dailyForecasts.map((day) =>
                        <CityForecastItem
                            key={day.EpochDate}
                            dailyForecast={day}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CityForecast
