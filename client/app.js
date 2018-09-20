import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import {theme} from './theme.js'
// import {withTheme} from '@material-ui/core/styles'

class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Routes />
      </div>
      // </MuiThemeProvider>
    )
  }
}
// export default withTheme()(App)
export default App
// import React from 'react'
// import {render} from 'react-dom'
// import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
// import Root from './Root'

// const theme = createMuiTheme()

// function App() { */

/* //   return (
//     <MuiThemeProvider theme={theme}>
//       <Root />
//     </MuiThemeProvider>
//   )
// } */

/* render(<App />, document.querySelector('#app'))
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

class  App extends Component() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#app')) */
