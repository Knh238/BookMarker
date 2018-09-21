import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Table from '@material-ui/core/Table'
import {createMuiTheme} from '@material-ui/core/styles'
const theme = createMuiTheme({palette: {type: 'dark'}})
class Books extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Table title="my recommendations for" />
      </MuiThemeProvider>
    )
  }
}

// Books.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default Books
