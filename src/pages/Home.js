import { useEffect } from 'react'
import Searchbar from '../components/Searchbar'

const DEFAULT_CITY_KEY = '215854'
const Home = ({ history }) => {

    useEffect(() => {
        const redirectToDefaultCity = async () => {
            history.push(`/city/${DEFAULT_CITY_KEY}`)
        }
        redirectToDefaultCity()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <Searchbar history={history} />
        </div>
    )
}

export default Home