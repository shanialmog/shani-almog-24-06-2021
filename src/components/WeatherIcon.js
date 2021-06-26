import Icon from '@mdi/react'
import { mdiWeatherSunny } from '@mdi/js'
import { mdiMoonFull } from '@mdi/js'
import { mdiWeatherHazy } from '@mdi/js'
import { mdiWeatherPartlyCloudy } from '@mdi/js'
import { mdiWeatherCloudy } from '@mdi/js'
import { mdiWeatherPouring } from '@mdi/js'

// https://developer.accuweather.com/weather-icons

const iconMap = {
    1: mdiWeatherSunny,
    2: mdiWeatherHazy,
    3: mdiWeatherPartlyCloudy,
    7: mdiWeatherCloudy,
    18: mdiWeatherPouring,
    34: mdiMoonFull
}

const WeatherIcon = ({ weatherIcon }) => {
    const path = iconMap[weatherIcon]
    if (!path) {
        console.log('No icon for:', weatherIcon)
        return null
    }

    return (
        <Icon path={path}
            size={2}
            horizontal
            vertical
            rotate={180}
            color="#999" />
    )
}

export default WeatherIcon