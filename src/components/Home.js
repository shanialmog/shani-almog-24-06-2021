import { useEffect } from 'react'
import Searchbar from './Searchbar'

const DEFAULT_CITY_KEY = '215854'
const Home = (props) => {

    useEffect(() => {
        const redirectToDefaultCity = async () => {
            props.history.push(`/city/${DEFAULT_CITY_KEY}`)
        }
        redirectToDefaultCity()
    }, [])

    return (
        <div className='container'>
            <Searchbar />
        </div>
    )
}

export default Home