import { useEffect, useState } from 'react'
import { getCityWeather, getCityForecast, getCityData } from '../utils/API'
import FavouriteButton from '../components/FavouriteButton'
import Searchbar from '../components/Searchbar'
import WeatherIcon from '../components/WeatherIcon'
import CityForecast from '../components/CityForecast'
import Temperature from '../components/Temperature'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500,
        padding: '1em',
        textAlign: 'center'
    },
    cityInfo: {
        flexGrow: '4'
    },
    title: {
        fontSize: '3em',
    },
    borderRadius: {
        borderRadius: '8px',
    }
})

const City = ({ match, history }) => {
    const classes = useStyles()
    const cityKey = match.params.id
    const [cityWeather, setCityWeather] = useState({})
    const [cityData, setCityData] = useState({})
    const [dailyForecasts, setDailyForecasts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const init = async () => {
            setError(null)
            setIsFetching(true)
            try {
                const cityWeatherResponse = await getCityWeather(cityKey)
                const cityForecastResponse = await getCityForecast(cityKey)
                const cityDataResponse = await getCityData(cityKey)
                // API returns an array, taking the first item
                setCityWeather(cityWeatherResponse[0])
                setDailyForecasts(cityForecastResponse.DailyForecasts)
                setCityData(cityDataResponse)
            } catch (e) {
                console.error(e)
                setError('Failed to fetch data')
            }
            setIsFetching(false)
        }
        init()
    }, [cityKey])

    const weatherText = cityWeather.WeatherText
    const temperatureValue = cityWeather.Temperature
    const weatherIcon = cityWeather.WeatherIcon
    const localizedName = cityData?.LocalizedName
    const country = cityData?.Country?.ID

    return (
        <div className='city-container'>
            <Searchbar history={history} />
            {
                isFetching &&
                <CircularProgress />
            }
            {
                error &&
                <Alert severity="error">{error}</Alert>
            }
            {
                !error && !isFetching &&
                <div className='city-container'>
                    <Card className={`${classes.root} ${classes.borderRadius} ${classes.cityInfo}`}>
                        <CardHeader
                            title={
                                <Typography className={classes.title} color='textSecondary'>
                                    {localizedName}, {country}
                                </Typography>
                            }
                            avatar={
                                <FavouriteButton cityKey={cityKey} />
                            }
                        />
                        <CardContent>
                            {
                                weatherText &&
                                <div>
                                    <Temperature valueInCelsius={temperatureValue.Metric.Value} />
                                    <Typography variant='h5' component='h3'>{weatherText}</Typography>
                                    <WeatherIcon weatherIcon={weatherIcon} />
                                </div>
                            }
                        </CardContent>
                    </Card>
                    <CityForecast dailyForecasts={dailyForecasts} />
                </div>
            }
        </div>
    )
}

export default City