import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_DARKMODE, TOGGLE_CELSIUS } from '../store/actions'
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
        display: 'flex'
    },
    switch: {
        display: 'inline-block',
    },
    header: {
        minHeight: '10vh',
        padding: '0.5em'
    },
    content: {
        lineHeight: '3',
        display: 'flex'
    },
}))

const Navabar = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state) => state.toggles.darkmode)
    const isCelsius = useSelector((state) => state.toggles.isCelsius)
    const classes = useStyles()

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch({ type: TOGGLE_DARKMODE })
        }
        // eslint-disable-next-line
    }, [])

    const ToggleDarkmode = () => {
        dispatch({ type: TOGGLE_DARKMODE })
    }

    const ToggleIsCelsius = () => {
        dispatch({ type: TOGGLE_CELSIUS })
    }

    return (
        <nav className={classes.root}>
            <AppBar className={classes.header} position='static'>
                <Typography className={classes.content} variant='h6' color='inherit'>
                    <img src='/assets/weatherLogo.svg' alt='weather-app-logo' />
                    <Button><Link to='/'>Home</Link></Button>
                    <Button><Link to='/Favourites'>Favourites</Link></Button>
                    <div className='grow'></div>
                    <span>
                        <FormGroup className={classes.switch} aria-label='position' row>
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
                                        checked={isCelsius}
                                        onChange={ToggleIsCelsius}
                                        color='secondary'
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />}
                                label='C°/F°'
                            />
                        </FormGroup>
                    </span>
                </Typography>
            </AppBar>
        </nav>
    )
}

export default Navabar