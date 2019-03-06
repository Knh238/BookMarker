import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
// import BigCalendar from 'react-big-calendar'
// import BigCalendar from 'react-big-calendar-like-google'
// import styles from 'react-big-calendar-like-google/lib/css/react-big-calendar.css'

// const localizer = BigCalendar.momentLocalizer(moment)

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
    // const myEventsList = [
    //   {
    //     title: 'Today',
    //     allDay: true,
    //     start: new Date(2018, 9, 30),
    //     end: new Date(2018, 10, 1)
    //   },
    //   {
    //     title: 'Long Event',
    //     start: new Date(2018, 3, 7),
    //     end: new Date(2018, 11, 10)
    //   }
    // ]
    // let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

    return (
      <div
        style={{
          padding: '20px 0px',
          height: '400px',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center'
        }}
        centered="true"
      >
        <InfiniteCalendar
          theme={{
            layout: 'portrait',
            flexGrow: 1,
            width: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            shouldHeaderAnimate: false,
            backgrounColor: '#D2D2E4',
            accentColor: '#8E56C6',
            headerColor: '#7F3FBF',
            selectionColor: '#C656C6',
            todayColor: '#F64A4D',
            floatingNav: {
              background: '#73C8AF',
              chevron: '#FFA726',
              color: '#FFF'
            },
            textColor: {
              active: '#0E0000',
              default: '#0E0000'
            },
            weekdayColor: '#AF73C8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          width={'800px'}
          disabledDate={(2018, 9, 24)}
          selected={today}
          minDate={new Date(2018, 0, 1)}
          maxDate={new Date(2020, 0, 1)}
        />
      </div>
    )
  }
}


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

// const mapDispatchToProps = dispatch => { */
/* //   return {
//     gotUserList: Userid => dispatch(getUserList(Userid)),
//     gotCurrentSeries: id => dispatch(getSeries(id))
//   }

export default connect(mapStateToProps)(ReleaseDates)
