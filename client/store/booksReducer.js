//import axios from 'axios'
import history from '../history'
const request = require('request')
const convert = require('xml-js')

request.mode = 'no-cors'

const GOT_USER_LIST = 'GOT_USER_LIST'
const GOT_CURRENT_SERIES = 'GOT_CURRENT_SERIES'
const GOT_QUOTES = 'GOT_QUOTES'
const GOT_DATES = 'GOT_DATES'
const ADDED_DATES = 'ADDED_DATES'

const gotUserList = list => ({
  type: GOT_USER_LIST,
  list
})
const gotCurrentSeries = series => ({
  type: GOT_CURRENT_SERIES,
  series
})
const gotQuotes = quotes => ({
  type: GOT_QUOTES,
  quotes
})
const gotDates = dates => ({
  type: GOT_DATES,
  dates
})
const addedDates = dates => ({
  type: ADDED_DATES,
  dates
})

export const getSeries = id => dispatch => {
  request.get(
    `https://www.goodreads.com/series/show?key=g8lgxPvHf4zuzCQqE7NQ&id=${id}.xml`,
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      console.log(body.url)
      console.log(body.explanation)
      var xml = body
      var result1 = convert.xml2json(xml, {
        compact: true,
        spaces: 2,
        ignoreDoctype: true,
        ignoreDeclaration: true
      })
      // const {series} = result1.series
      const resBody = JSON.parse(result1)
      const series = resBody.GoodreadsResponse.series

      console.log(series)
      dispatch(gotCurrentSeries(series))
      // return result1
    }
  )
}
// getSeries('52637')
// Get the books on a members shelf
// Get the books on a members shelf. Customize the feed with the below variables. Viewing members with profiles who have set them as visible to members only or just their friends requires using OAuth.
// URL: https://www.goodreads.com/review/list?v=2    (sample url)
// HTTP method: GET
// Parameters:
// v: 2
// id: Goodreads id of the user
// shelf: read, currently-reading, to-read, etc. (optional)

// // per_page: 1-200 (optional)
// // key: Developer key (required).

// https://www.goodreads.com/review/list/5900639?key=g8lgxPvHf4zuzCQqE7NQ&v=2&self=demo.xml
// 5900639

export const getUserList = id => dispatch => {
  request.get(
    `https://www.goodreads.com/review/list/${id}.xml?shelf=demo&key=g8lgxPvHf4zuzCQqE7NQ&v=2?`,
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      console.log(body.url)
      console.log(body.explanation)
      var xml = body
      var result1 = convert.xml2json(xml, {
        compact: true,
        spaces: 2,
        ignoreDoctype: true,
        ignoreDeclaration: true
      })
      // const {series} = result1.series
      const resBody = JSON.parse(result1)
      console.log(resBody)
      const list = resBody.GoodreadsResponse.reviews.review
      //   console.log(series)
      dispatch(gotUserList(list))
      // return result1
    }
  )
}
// export const getQuotes = id => dispatch => {
//   request.get(
//     `https://www.goodreads.com/series/show?key=g8lgxPvHf4zuzCQqE7NQ&id=${id}.xml`,
//     (err, res, body) => {
//       if (err) {
//         return console.log(err)
//       }
//       console.log(body.url)
//       console.log(body.explanation)
//       var xml = body
//       var result1 = convert.xml2json(xml, {
//         compact: true,
//         spaces: 2,
//         ignoreDoctype: true,
//         ignoreDeclaration: true
//       })
//       // const {series} = result1.series
//       const resBody = JSON.parse(result1)
//       const list = resBody.GoodreadsResponse.series
//       console.log(series)
//       dispatch(gotQuotes(quotes))
//       // return result1
//     }
//   )
// }
// export const getDates = id => dispatch => {
//   request.get(
//     `https://www.goodreads.com/series/show?key=g8lgxPvHf4zuzCQqE7NQ&id=${id}.xml`,
//     (err, res, body) => {
//       if (err) {
//         return console.log(err)
//       }
//       console.log(body.url)
//       console.log(body.explanation)
//       var xml = body
//       var result1 = convert.xml2json(xml, {
//         compact: true,
//         spaces: 2,
//         ignoreDoctype: true,
//         ignoreDeclaration: true
//       })
//       // const {series} = result1.series
//       const resBody = JSON.parse(result1)
//       const list = resBody.GoodreadsResponse.series
//       console.log(series)
//       dispatch(gotDates(dates))
//       // return result1
//     }
//   )
// }
// getSeries('52637')
const initialState = {
  books: [],
  userList: [],
  currentSeries: [],
  quotes: [],
  dates: []
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER_LIST:
      return {...state, userList: action.list}
    case GOT_CURRENT_SERIES:
      return {
        ...state,
        currentSeries: [...state.currentSeries, action.series]
      }
    case GOT_QUOTES:
      return {
        ...state,
        quotes: action.quotes
      }
    case GOT_DATES:
      return {
        ...state,
        dates: action.dates
      }
    case ADDED_DATES:
      return {
        ...state,
        dates: [...state.dates, action.dates]
      }
    default:
      return state
  }
}
export default booksReducer
