import { useEffect, useState } from 'react'
import { getCityWeather, getCityForecast } from '../utils/API'
import FavouriteButton from '../components/FavouriteButton'
import Searchbar from '../components/Searchbar'
import Alert from '@material-ui/lab/Alert'
import CityForecast from '../components/CityForecast'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500,
        minHeight: 300,
        // maxHeight: 200
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

    const {
        LocalizedName,
        Country,
    } = cities[cityKey]


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

    const {
        Temperature,
        WeatherText
    } = cityWeather

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
                        <CardContent>
                            <FavouriteButton cityKey={cityKey} />
                            <Typography className={classes.title} color='textSecondary' gutterBottom>
                                {LocalizedName}, {Country.ID}
                            </Typography>
                            {
                                WeatherText &&
                                <div>
                                    <Typography variant='h4' component='h2'>
                                        <span>
                                            {Temperature.Metric.Value}
                                        </span>
                                        <span>
                                            {Temperature.Metric.Unit}
                                        </span>
                                    </Typography>
                                    <Typography variant='h5' component='h3'>{WeatherText}</Typography>
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