import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InfiniteCalendar from 'react-infinite-calendar'
//import Calendar from 'react-calendar-material'
// import 'react-infinite-calendar/styles.css'

// // // // // const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const theme = createMuiTheme({palette: {type: 'dark'}})
class ReleaseDates extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        {
          title: 'stackathon presentation',
          start: Date.now()
        }
      ]
      // releases: {},
      // date: null
    }
    //     this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //     // this.handleDate = this.handleDate.bind(this)
  }

  //   Event {
  //   title: 'stackathon presentation',
  //   start: September 24,2018,
  //   resource?: any,
  // }
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

  // //   var lastWeek = new Date(
  // //     today.getFullYear(),
  // //     today.getMonth(),
  // //     today.getDate() - 7
  // //   )
  render() {
    var today = new Date()
    var lastYear = new Date(today.getFullYear())
    var twoYears = new Date(2020)
    return (
      // <MuiThemeProvider theme={theme}>
      <div display="flex">
        {/* <Button
          label="Submit"
          primary={true}
          type="submit"
          onClick={this.handleSubmit}
        /> */}
        <MuiThemeProvider theme={theme}>
          <InfiniteCalendar
            displayOptions={{
              layout: 'portrait',
              // showOverlay: false,
              shouldHeaderAnimate: false,
              text: 'white'
            }}
            // width={'50%'}
            // height={'50%'}
            display={'Years'}
            selected={today}
            // disabledDays={[0, 6]}
            minDate={lastYear}
            maxDate={twoYears}
          />
          {/* <Calendar
            accentColor={'blue'}
            orientation={'flex-col'}
            showHeader={false}
            onDatePicked={d => {
              console.log('onDatePicked', d)
            }}
          /> */}
        </MuiThemeProvider>
      </div>
      // </MuiThemeProvider>
      /* <BigCalendar
      //           localizer={localizer}
      //           views={'month'}
      //           events={this.state.events}
      //           accentColor={'blue'}
      //           orientation={'flex-col'}
      //           // endAccessor="end"
      //         /> */
      //         {/* <Calendar onChange={this.handleChange} value={this.state.date} /> */}
    )
  }
}
export default ReleaseDates
