import { useEffect, useState } from 'react'
import { getData } from '../utils/API'
import Searchbar from './Searchbar'
import { CITY_DATA } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'

const City = ({match, location}) => {
    const [cityData, setCityData] = useState([])
    const cityKey = match.params.id

    useEffect(() => {
        const redirectToDefaultCity = async () => {
            const data = await getData('currentconditions', { 'cityKey': cityKey })
            console.log(data)
            setCityData(data)
        }
        redirectToDefaultCity()
    }, [])

    return (
        <div>
            <Searchbar />
            City!
        </div>
    )
}

export default City