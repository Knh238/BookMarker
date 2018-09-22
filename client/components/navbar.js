// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'
// //import AppBar from '@material-ui/core/AppBar'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import AppBar from '@material-ui/core/AppBar'
// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>BookMarker</h1>
//     <AppBar position="static">
//       <h1>BookMarker</h1>
//       <nav>
//         {isLoggedIn ? (
//           <div>
//             {/* The navbar will show these links after you log in */}
//             <Link to="/home">Home</Link>
//             <a href="#" onClick={handleClick}>
//               Logout
//             </a>
//           </div>
//         ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//         )}
//       </nav>
//       <hr />
//     </AppBar>
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

// const withThemeNavbar = withTheme()(Navbar)
// export default connect(mapState, mapDispatch)(withThemeNavbar)
/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Main from './Main'
import {fade} from '@material-ui/core/styles/colorManipulator'

const styles = {
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
    //  align-items: right ,
  }
}

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: true,
      anchorEl: null,
      showComponent: false
    }
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  handleChange = event => {
    this.setState({auth: event.target.checked})
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }
  onButtonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      })
    } else {
      this.setState({
        showComponent: true
      })
    }
  }

  render() {
    const {classes} = this.props
    const {auth, anchorEl} = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={styles.root}>
        {/* <FormGroup> */}
        {/* <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              onClick={this.onButtonClick}
              aria-label="Menu"
            >
              {' '}
              {this.state.showComponent ? <Main /> : null}
              <MenuIcon />
            </IconButton>

            {/* <div className={styles.profile}> */}
            <Typography variant="title" color="inherit" className={styles.grow}>
              Photos
            </Typography>
            {/* {/* {auth && ( */}
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                {/* </div> */}
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
