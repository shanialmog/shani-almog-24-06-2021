import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_DARKMODE } from '../store/actions'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    switch: {
        display: 'inline-block',
    }
}))

const Navabar = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state) => state.darkmode)
    const classes = useStyles()

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch({ type: TOGGLE_DARKMODE })
        }
    }, [])

    const ToggleDarkmode = (e) => {
        dispatch({ type: TOGGLE_DARKMODE })
    }

    return (
        <div>
            <nav className={classes.root}>
                <AppBar position='static'>
                    <Typography variant='h6' color='inherit'>
                        <Button><Link to='/'>Home</Link></Button>
                        <Button><Link to='/Favourites'>Favourites</Link></Button>
                        <FormGroup className={classes.switch}aria-label='position' row>
                            <FormControlLabel
                                value='top'
                                control={
                                    <Switch
                                        checked={darkmode}
                                        onChange={ToggleDarkmode}
                                        color='secondary'
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />}
                                label='Dark mode'
                            />
                        </FormGroup>
                        <FormGroup className={classes.switch} aria-label='position' row>
                            <FormControlLabel
                                value='top'
                                control={
                                    <Switch
                                        // checked={}
                                        // onChange={}
                                        color='secondary'
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />}
                                label='Degrees'
                            />
                        </FormGroup>
                    </Typography>
                </AppBar>
            </nav>
        </div>
    )
}

export default Navabar