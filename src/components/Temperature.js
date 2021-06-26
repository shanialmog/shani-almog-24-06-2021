import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'

const Temperature = ({ valueInCelsius, small }) => {
    const isCelsius = useSelector((state) => state.toggles.isCelsius)
    const value = isCelsius ? valueInCelsius : (valueInCelsius * (9 / 5) + 32)

    return (
        <Typography variant={small ? 'body2' : 'h4'} component='span' gutterBottom>
            {Math.round(value)}°{isCelsius ? 'C' : 'F'}
        </Typography>
    )
}

export default Temperature
