import React, {Component} from 'react'
import {Navbar} from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}
export default App
