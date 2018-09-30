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

import Divider from '@material-ui/core/Divider'

const styles = {
  root: {
    display: 'flex'
  },
  button: {},

  grow: {
    flexGrow: 1
  },
  links: {
    position: 'relative'
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
            {/* {this.state.isLoggedIn ? ( */}
            <div className="forceR">
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="primary"
              >
                <AccountCircle color="primary" />
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
                color="primary"
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
                  color="primary"
                />
              </FormGroup>
            </div>
            // ) : (
            <div className={styles.links}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                lastchild="true"
                float="right"
              >
                <Link to="/login" className="linkB">
                  <h3>Login</h3>
                </Link>
              </Button>
            </div>
            // )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    isLoggedIn: !!state.current
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
