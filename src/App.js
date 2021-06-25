import { Fragment } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import City from './components/City'
import Favourites from './components/Favourites'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
// import { orange, deepOrange, lightBlue, deepPurple } from '@material-ui/core/colors'
import { useSelector } from 'react-redux'
import './App.css'


function App() {
  const darkmode = useSelector((state) => state.darkmode)
  // const mainPrimaryColor = darkmode ? orange[500] : lightBlue[500]
  // const mainSecondaryColor = darkmode ? deepOrange[900] : deepPurple[500]

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
      // primary: {
      //   main: mainPrimaryColor
      // },
      // secondary: {
      //   main: mainSecondaryColor
      // }
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
