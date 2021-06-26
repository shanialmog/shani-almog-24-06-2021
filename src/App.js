import { Fragment } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import City from './pages/City'
import Favourites from './pages/Favourites'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { useSelector } from 'react-redux'
import './App.css'


function App() {
  const darkmode = useSelector((state) => state.toggles.darkmode)
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Navbar />
          <Fragment>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/favourites' component={Favourites} />
                <Route exact path='/city/:id' component={City} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </div >
    </ThemeProvider>
  )
}

export default App
