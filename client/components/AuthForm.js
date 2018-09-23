import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import FormControl from '@material-ui/core/FormControl'

import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  layout: {
    width: '50%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 40
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '60%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  console.log('ME PROPS', props)

  return (
    <main
      className={styles.layout}
      style={{
        float: 'none',
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <Paper className={styles.paper}>
        <Button type="submit" size="medium" variant="contained" color="primary">
          <a href="/auth/goodreads">
            <h2 className="logForm">{displayName} with goodreads</h2>
          </a>
        </Button>
        {/* <a href="/auth/goodreads">
          <h2 className="logForm">{displayName} with goodreads</h2>
        </a> */}
        {/* <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <h2 color="white">Email</h2>
              </label>
              <input name="email" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <h2 color="white">password</h2>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">
                <h2>{displayName}</h2>
              </button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form> */}
        <Avatar className={styles.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="headline" flex-grow="1">
          Sign in
        </Typography>
        <form
          className={styles.form}
          style={{
            float: 'none',
            // width: '250px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <FormControl margin="normal" required flex-grow="1">
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button
            type="submit"
            variant="raised"
            color="primary"
            className={styles.submit}
          >
            Sign in
          </Button>
        </form>
        {/* <a href="/auth/goodreads">
            <h2 className="logForm">{displayName} with goodreads</h2>
          </a> */}
      </Paper>
    </main>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.error
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, ownProps.history))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
