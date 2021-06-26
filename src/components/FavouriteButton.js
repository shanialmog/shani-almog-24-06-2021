import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store/actions'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


const FavouriteButton = ({ cityKey }) => {
    const dispatch = useDispatch()
    const [isDialogOpen, setIsDIalogOpen] = useState(false)
    const favourites = useSelector((state) => state.favourites)
    const isFavourite = favourites.has(cityKey)

    const handleClick = (e) => {
        if (isFavourite) {
            setIsDIalogOpen(true)
        } else {
            dispatch({ type: ADD_FAVOURITE, payload: cityKey })
        }
    }
    
    const removeFavourite = () => {
        dispatch({ type: REMOVE_FAVOURITE, payload: cityKey })
        setIsDIalogOpen(false)
    }

    const cancelDialog = () => {
        setIsDIalogOpen(false)
    }


    return (
        <div>
            <IconButton onClick={handleClick}>
                <img src={isFavourite ? '/assets/FilledHeart.svg' : '/assets/Heart.svg'} alt='favourite' />
            </IconButton>


            <Dialog
                open={isDialogOpen}
                onClose={cancelDialog}
                aria-labelledby='unfavourite-confirmation'
            >
                <DialogTitle id='unfavourite-confirmation'>
                    Remove from favourites
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to remove this city from your favourites?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={cancelDialog}>
                        Cancel
                    </Button>
                    <Button onClick={removeFavourite} color='secondary' autoFocus>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FavouriteButton