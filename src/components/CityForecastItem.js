
const CityForecastItem = ({ dailyForecast }) => {

    const minTemp = dailyForecast.Temperature.Minimum.Value
    const maxTemp = dailyForecast.Temperature.Maximum.Value
    const dayText = dailyForecast.Day.IconPhrase
    const nightText = dailyForecast.Night.IconPhrase

    return (
        <div>
            <h4>Day</h4>
            <div>{minTemp}-{maxTemp}</div>
            <div>Day:{dayText}</div>
            <div>Night:{nightText}</div>
        </div>
    )
}

export default CityForecastItem
