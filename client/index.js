import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {withStyles} from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import 'react-infinite-calendar/styles.css'
// establishes socket connection
import './socket'

const theme = createMuiTheme({palette: {type: 'dark'}})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
