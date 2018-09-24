import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {Navbar} from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
// import {Main} from './components'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      // <CssBaseline />
      <div>
        {/* <CssBaseline /> */}
        <Navbar />
        <Routes />
      </div>
    )
  }
}
export default App
//export default withRouter(App)
