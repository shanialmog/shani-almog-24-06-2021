import IconButton from '@material-ui/core/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store/actions'

const FavouriteButton = ({ cityKey }) => {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.favourites)
    const isFavourite = favourites.has(cityKey)

    const handleClick = (e) => {
        if (isFavourite) {
            dispatch({ type: REMOVE_FAVOURITE, payload: cityKey })
        } else {
            dispatch({ type: ADD_FAVOURITE, payload: cityKey })
        }
    }

    return (
        <div>
            <IconButton onClick={handleClick}>
                <img src={isFavourite ? '/assets/FilledHeart.svg' : '/assets/Heart.svg'} alt='favourite' />
            </IconButton>
        </div>
    )
}

export default FavouriteButton