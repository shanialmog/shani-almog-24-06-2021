import { useEffect, useState } from 'react'
import { getCityWeather, getCityForecast } from '../utils/API'
import Searchbar from '../components/Searchbar'
import CityForecast from '../components/CityForecast'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500,
    },
    title: {
        fontSize: '3em',
    },
    borderRadius: {
        borderRadius: '8px',
    }
})

const City = ({ match }) => {
    const classes = useStyles()
    const cityKey = match.params.id
    const cities = useSelector((state) => state.cities)
    const [cityWeather, setCityWeather] = useState({})
    const [dailyForecasts, setDailyForecasts] = useState([])

    const {
        LocalizedName,
        Country,
    } = cities[cityKey]


    useEffect(() => {
        const getCityData = async () => {
            const cityData = await getCityWeather(cityKey)
            // API returns an array, taking the first item
            setCityWeather(cityData[0])
            const cityForecastData = await getCityForecast(cityKey)
            setDailyForecasts(cityForecastData.DailyForecasts)
        }
        getCityData()
    }, [cityKey])

    const {
        EpochTime,
        HasPrecipitation,
        IsDayTime,
        // Link,
        LocalObservationDateTime,
        MobileLink,
        PrecipitationType,
        Temperature,
        WeatherText
    } = cityWeather

    return (
        <div>
            <Searchbar />
            <Card className={`${classes.root} ${classes.borderRadius}`}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {LocalizedName}, {Country.ID}
                    </Typography>
                    {
                        WeatherText &&
                        <div>
                            <Typography>
                                <span>
                                    {Temperature.Metric.Value}
                                </span>
                                <span>
                                    {Temperature.Metric.Unit}
                                </span>
                            </Typography>
                            <Typography>{WeatherText}</Typography>
                            <Typography>{EpochTime}</Typography>
                            <Typography>{HasPrecipitation}</Typography>
                            <Typography>{IsDayTime}</Typography>
                            <Typography>{LocalObservationDateTime}</Typography>
                            <Typography>{PrecipitationType}</Typography>
                            <Typography>{MobileLink}</Typography>
                        </div>
                    }
                </CardContent>
            </Card>
            <div>
                <CityForecast dailyForecasts={dailyForecasts} />
            </div>
        </div>
    )
}

export default City