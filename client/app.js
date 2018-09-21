import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {Navbar} from './components'
// import CssBaseline from 'material-ui/CssBaseline'
import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './Main'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Main />
        <Routes />
      </div>
    )
  }
}
export default App
// export default withStyles(styles)(withRouter(App))
