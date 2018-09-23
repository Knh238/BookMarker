import axios from 'axios'
import history from '../history'
// const goodreads = require('goodreads-api-node')
// getUserInfo(userID)
// getUsersShelves(userID)
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

// 5900639-kristin-harper
// https://www.goodreads.com/review/list/5900639?shelf=%23ALL%23

// getUserInfo(userID)
// getUsersShelves(userID)
// Get the listopia lists for a given book
// XML version of list/book. This API requires extra permission please contact us
// URL: https://www.goodreads.com/list/book/BOOK_ID.xml    (sample url)
// HTTP method: GET
// Parameters:
// key: Developer key (required).

// Get the books on a members shelf
// Get the books on a members shelf. Customize the feed with the below variables. Viewing members with profiles who have set them as visible to members only or just their friends requires using OAuth.
// URL: https://www.goodreads.com/review/list?v=2    (sample url)
// HTTP method: GET
// Parameters:
// v: 2
// id: Goodreads id of the user
// shelf: read, currently-reading, to-read, etc. (optional)
// sort: title, author, cover, rating, year_pub, date_pub, date_pub_edition, date_started, date_read, date_updated, date_added, recommender, avg_rating, num_ratings, review, read_count, votes, random, comments, notes, isbn, isbn13, asin, num_pages, format, position, shelves, owned, date_purchased, purchase_location, condition (optional)
// search[query]: query text to match against member's books (optional)
// order: a, d (optional)
// page: 1-N (optional)
// per_page: 1-200 (optional)
// key: Developer key (required).
// See a series
// Info on a series
// URL: https://www.goodreads.com/series/show/ID.xml    (sample url)
// HTTP method: GET

// See all series by an author
// List of all series by an author
// URL: /series/list?format=xml&id=AUTHOR_ID    (sample url)
// HTTP method: GET

// See all series a work is in
// List of all series a work is in
// URL: https://www.goodreads.com/series/work/WORK_ID?format=xml    (sample url)
// HTTP method: GET
