import { useSelector } from 'react-redux'
import FavouriteItem from '../components/FavouriteItem'
import Typography from '@material-ui/core/Typography'

const Favourites = ({history}) => {
    const favourites = useSelector((state) => state.favourites)

    return (
        <div className='favourites-container'>
            <Typography variant='h3' component='h1'>Favourites</Typography>
            <div className='favourites-list'>
            {Array.from(favourites).map((FavouriteCity) =>
                <FavouriteItem
                    key={FavouriteCity}
                    cityKey={FavouriteCity}
                    history={history}
                />
            )}

            </div>
        </div>
    )
}

export default Favourites