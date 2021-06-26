import { useEffect, useState } from 'react'
import { getCityWeather, getCityForecast } from '../utils/API'
import FavouriteButton from '../components/FavouriteButton'
import Searchbar from '../components/Searchbar'
import WeatherIcon from '../components/WeatherIcon'
import CityForecast from '../components/CityForecast'
import Temperature from '../components/Temperature'
import Alert from '@material-ui/lab/Alert'
import { useSelector } from 'react-redux'
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
    const cities = useSelector((state) => state.cities)
    const [cityWeather, setCityWeather] = useState({})
    const [dailyForecasts, setDailyForecasts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const init = async () => {
            setError(null)
            setIsFetching(true)
            try {
                const cityData = await getCityWeather(cityKey)
                const cityForecastData = await getCityForecast(cityKey)
                // API returns an array, taking the first item
                setCityWeather(cityData[0])
                setDailyForecasts(cityForecastData.DailyForecasts)
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
    const localizedName = cities[cityKey]?.LocalizedName
    const country = cities[cityKey]?.Country?.ID

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