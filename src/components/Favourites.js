import { useSelector, useDispatch } from 'react-redux'
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store/actions'

const Favourites = () => {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.favourites)
    return (
        <div>
            Favourites!
            <br />
            favorites: {Array.from(favourites).map((i) => <div key={i}>{i}</div>)}
            <button onClick={() => dispatch({ type: ADD_FAVOURITE, payload: 'PPP' })}>
                ADD_FAVOURITE
            </button>
            <button onClick={() => dispatch({ type: REMOVE_FAVOURITE, payload: 'PPP' })}>
                REMOVE_FAVOURITE
            </button>
        </div>
    )
}

export default Favourites