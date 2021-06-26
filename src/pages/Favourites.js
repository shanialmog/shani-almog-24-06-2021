import { useSelector } from 'react-redux'
import FavouriteItem from '../components/FavouriteItem'

const Favourites = () => {
    const favourites = useSelector((state) => state.favourites)

    return (
        <div>
            {Array.from(favourites).map((FavouriteCity) =>
                <FavouriteItem
                    key={FavouriteCity}
                    cityKey={FavouriteCity}
                />
            )}
        </div>
    )
}

export default Favourites