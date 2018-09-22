import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVED_USER_FROM_LOGIN = 'REMOVED_USER_FROM_LOGIN'
const GOT_LIST = 'GOT_LIST'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removedUserFromLogin = () => ({type: REMOVED_USER_FROM_LOGIN})
const gotList = books => ({type: GOT_LIST, books})

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
export const getlist = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://www.goodreads.com/review/list/5900639key=g8lgxPvHf4zuzCQqE7NQ'
    )
    console.log(res.data)
    // <tbody id="booksBody">
    dispatch(gotList(res.data))
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
const initialState = {list: {}, current: {}}
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
    case GOT_LIST:
      return {...state, list: action.books}
    default:
      return state
  }
}
// export default userReducer
