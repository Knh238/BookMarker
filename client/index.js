import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {theme} from './theme.js'
import {withTheme} from '@material-ui/core/styles'

// establishes socket connection
import './socket'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)

export default withTheme()(App)
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Button from '@material-ui/core/Button'

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   )
// }

// ReactDOM.render(<App />, document.querySelector('#app'))
