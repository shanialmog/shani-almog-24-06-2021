import { useEffect, useState } from 'react'
import FavouriteButton from './FavouriteButton'
import { getCityWeather, getCityData } from '../utils/API'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'

const useStyles = makeStyles({
    root: {
        minWidth: 150,
        maxWidth: 200,
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

    const cityName = cityData?.LocalizedName
    const countryId = cityData?.Country?.ID
    const { WeatherText } = cityWeather

    const redirectToCity = () => {
        history.push(`/city/${cityKey}`)
    }


    return (
        <div>
            <Card
                className={`${classes.root} ${classes.borderRadius}`}
            >
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
                        <Typography gutterBottom>
                            {WeatherText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default FavouriteItem