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

// // export default connect(mapState, mapDispatch)(Navbar)

// // const withThemeNavbar = withTheme()(Navbar)
// // export default connect(mapState, mapDispatch)(withThemeNavbar)
// /**
//  * PROP TYPES
//  */
// // Navbar.propTypes = {
// //   handleClick: PropTypes.func.isRequired,
// //   isLoggedIn: PropTypes.bool.isRequired
// // }
// export default Navbar
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'

import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Main from './Main'
import {fade} from '@material-ui/core/styles/colorManipulator'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
// const theme = createMuiTheme({palette: {type: 'dark'}})
const styles = {
  root: {
    display: 'flex'
  },
  button: {
    // display: 'flex'
    // justifycontent: 'spacebetween'
    // backgroundcolor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },

  grow: {
    flexGrow: 1
  },

  links: {
    position: 'relative'
    // display: 'flex',
    // justifycontent: 'spacebetween'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      auth: true,
      anchorEl: null,
      showComponent: false
    }
    this.onButtonClick = this.onButtonClick.bind(this)
    // handleClick, isLoggedIn}
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
      <div width="300%">
        {/* <MuiThemeProvider theme={theme}> */}
        <AppBar position="relative">
          <Toolbar className="blueG">
            <IconButton
              color="inherit"
              onClick={this.onButtonClick}
              aria-label="Menu"
              firstchild="true"
              float="left"
            >
              {this.state.showComponent ? <Main /> : null}
              <MenuIcon />
            </IconButton>
            <Typography
              variant="display3"
              color="inherit"
              // className={styles.grow}
              centered="true"
              style={{
                float: 'none',
                width: '200px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              BookMarker
            </Typography>
            <Divider />
            {this.state.isLoggedIn ? (
              <div className="forceR">
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
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                <FormGroup color="primary">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={auth}
                        onChange={this.handleChange}
                        aria-label="LoginSwitch"
                        color="primary"
                      />
                    }
                    label={auth ? 'Logout' : 'Login'}
                  />
                </FormGroup>
              </div>
            ) : (
              <div className={styles.links}>
                <Divider />

                <Button
                  variant="contained"
                  size="medium"
                  // onClick={this.handleMenu}
                  color="primary"
                  lastchild="true"
                  float="right"
                >
                  <Link to="/login" className="linkB">
                    <h3>Login</h3>
                  </Link>
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {/* </MuiThemeProvider> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    isLoggedIn: !!state.current
    // handleClick, isLoggedIn}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
