import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_DARKMODE, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store/actions'

const Navabar = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state) => state.darkmode)
    const favourites = useSelector((state) => state.favourites)

    return (
        <div>
            darkmode: {darkmode ? 'yes': 'no'}
            <button onClick={() => dispatch({ type: TOGGLE_DARKMODE })}>
                TOGGLE_DARKMODE
            </button>
            <br />
            favorites: {Array.from(favourites).map((i) => <div key={i}>{i}</div>)}
            <button onClick={() => dispatch({ type: ADD_FAVOURITE, payload: 'PPP'})}>
                ADD_FAVOURITE
            </button>
            <button onClick={() => dispatch({ type: REMOVE_FAVOURITE, payload: 'PPP' })}>
                REMOVE_FAVOURITE
            </button>
        </div>
    )
}

export default Navabar