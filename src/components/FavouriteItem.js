import { useEffect, useState } from 'react'
import FavouriteButton from './FavouriteButton'
import { getCityWeather, getCityData } from '../utils/API'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles({
    root: {
        width: 200,
        minWidth: 150,
        maxWidth: 300,
    },
    title: {
        fontSize: '2em',
    },
    borderRadius: {
        borderRadius: '8px',
    },
    actionArea: {
        padding: '1.5em'
    }
})

const FavouriteItem = ({ cityKey, history }) => {
    const classes = useStyles()
    const [cityData, setCityData] = useState({})
    const [cityWeather, setCityWeather] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const init = async () => {
            setError(null)
            setIsFetching(true)
            try {
                const cityWeatherData = await getCityWeather(cityKey)
                // API returns an array, taking the first item
                setCityWeather(cityWeatherData[0])
                const cityData = await getCityData(cityKey)
                setCityData(cityData)

            } catch (e) {
                console.error(e)
                setError('Failed to fetch city card')
            }
            setIsFetching(false)
        }
        init()
    }, [cityKey])

    const cityName = cityData?.LocalizedName
    const countryId = cityData?.Country?.ID
    const { WeatherText } = cityWeather
    const tempreture = cityWeather?.Temperature?.Metric?.Value

    const redirectToCity = () => {
        history.push(`/city/${cityKey}`)
    }

    return (
        <div>
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
                <Card className={`${classes.root} ${classes.borderRadius}`}>
                    <CardActionArea className={classes.actionArea}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color='textSecondary'
                                gutterBottom
                                onClick={redirectToCity}
                            >
                                {cityName}, {countryId}
                            </Typography>
                            <FavouriteButton cityKey={cityKey} />
                            <Typography variant='h5' component='h2' gutterBottom>
                                {tempreture}
                            </Typography>
                            <Typography gutterBottom>
                                {WeatherText}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </div>
    )
}

export default FavouriteItem