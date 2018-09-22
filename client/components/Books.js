import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Table from '@material-ui/core/Table'
import {createMuiTheme} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

const theme = createMuiTheme({palette: {type: 'dark'}})
class Books extends React.Component {
  // const {classes} = this.props
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Table title="my recommendations for" />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={styles.textField}
          margin="normal"
          variant="outlined"
        />
      </MuiThemeProvider>
    )
  }
}

// Books.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default Books
