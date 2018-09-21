import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme} from '@material-ui/core/styles'
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
const theme = createMuiTheme({palette: {type: 'dark'}})

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={styles.flex}>
              App Bar
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)
