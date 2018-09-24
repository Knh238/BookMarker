import axios from 'axios'
import history from '../history'
// const request = require('request')
// var convert = require('xml-js')
// const goodreads = require('goodreads-api-node')

// getUserInfo(userID)
// getUsersShelves(userID)x
/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVED_USER_FROM_LOGIN = 'REMOVED_USER_FROM_LOGIN'

/**
 * INITIAL STATE
 */
const defaultUser = {}
/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removedUserFromLogin = () => ({type: REMOVED_USER_FROM_LOGIN})

// request.mode = 'no-cors'

// )
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = history => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removedUserFromLogin())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

// const defaultUser = {}
const initialState = {current: {}}
/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, current: action.user}
    case REMOVED_USER_FROM_LOGIN:
      return {
        ...state,
        current: {}
      }
    default:
      return state
  }
}
