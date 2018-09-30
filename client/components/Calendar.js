import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InfiniteCalendar from 'react-infinite-calendar'
//import Calendar from 'react-calendar-material'
import 'react-infinite-calendar/styles.css'

class ReleaseDates extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   events: [
    //     {
    //       title: 'stackathon presentation',
    //       start: Date.now()
    //     }
    //   ]
    // }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleDate(event, date) {
  //   const {book} = this.event.value
  //   book.release = date
  //   this.setState({releases: book})
  // }
  handleChange(event) {
    console.log('the selected date:', event.target.value)
  }

  handleSubmit(event) {
    let momentDate = moment(this.state.date)
    let renderedDate = moment({
      year: momentDate.year(),
      month: momentDate.month(),
      day: momentDate.date()
    })
    const newRelease = {
      date_time: renderedDate
    }
    this.props.actions.addEvent(newRelease)
    this.setState({date: null})
  }

  render() {
    var today = new Date()
    var lastYear = new Date(today.getFullYear())
    var twoYears = new Date(2020)
    // const shelf = this.props.books.userList.releaseDates
    // const recents = shelf.filter(item => item.year >= twoYears)
    // console.log('this recents', recents)

    return (
      <div id="cal">
        <InfiniteCalendar
          style={{
            layout: 'portrait',

            width: '60em',
            marginLeft: 'auto',
            marginRight: 'auto',
            shouldHeaderAnimate: false,
            backgrounColor: 'white',
            accentColor: 'blue'
          }}
          // display={['years']}
          disabledDate={(2018, 9, 24)}
          selected={today}
          minDate={new Date(2018, 0, 1)}
          maxDate={new Date(2020, 0, 1)}
        />
      </div>
    )
  }
}
// {shelf.map(item => {
//   return (
//     <li key={item.book.id._text}>
// {item.book.title._text}
//       {item.book.authors.author.name._text}</li>

//       )

const mapStateToProps = state => {
  return {
    // user: state.user,
    ...state,
    user: state.user.current,
    // id: state.user.current.id,
    // series: state.books.currentSeries,
    userList: state.books.userList
  }
}
// const id = '52637'
// const mapDispatchToProps = dispatch => {
//   return {
//     gotUserList: Userid => dispatch(getUserList(Userid)),
//     gotCurrentSeries: id => dispatch(getSeries(id))
//   }
// }
export default connect(mapStateToProps)(ReleaseDates)
