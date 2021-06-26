
import moment from 'moment'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        minWidth: 150,
        maxWidth: 250,
    },
    title: {
        fontSize: '2em',
    },
    borderRadius: {
        borderRadius: '8px',
    },
})

const CityForecastItem = ({ dailyForecast }) => {
    const classes = useStyles()
    const date = moment(dailyForecast.Date).format('D.MM')
    const minTemp = dailyForecast.Temperature.Minimum.Value
    const maxTemp = dailyForecast.Temperature.Maximum.Value
    const dayText = dailyForecast.Day.IconPhrase
    const nightText = dailyForecast.Night.IconPhrase

    return (
            <Card className={`${classes.root} ${classes.borderRadius}`}>
                    <CardContent>
                        <Typography
                            // className={classes.title}
                            color='textSecondary'
                            gutterBottom
                        >
                            {date}
                        </Typography>
                        <Typography gutterBottom>
                        {minTemp}-{maxTemp}
                        </Typography>
                        <Typography gutterBottom>
                           Day: {dayText}
                        </Typography>
                        <Typography gutterBottom>
                        Night: {nightText}
                        </Typography>
                    </CardContent>
            </Card>
    )
}

export default CityForecastItem
