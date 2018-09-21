import React from 'react'
import moment from 'moment'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
// import DatePicker from '@material-ui/core/DatePicker'
import Button from '@material-ui/core/Button'
import DatePickerDialog from 'material-ui-pickers/DatePicker/DatePicker'
import Calendar from 'material-ui/DatePicker/Calendar'
const theme = createMuiTheme({palette: {type: 'dark'}})
class ReleaseDates extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      releases: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  handleDate(event, date) {
    const {book} = this.event.value
    book.release = date
    this.setState({releases: book})
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
    const actions = [
      <Button
        label="Cancel"
        primary={true}
        // onTouchTap={this.handleClose}
      />,
      <Button
        label="Submit"
        primary={true}
        type="submit"
        onClick={this.handleSubmit}
      />
    ]

    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <form>
            {/* <DatePickerDialog
              onChange={this.handleDate}
              value={this.state.date}
              hintText="Anticipated Release Date"
            /> */}
            <Calendar
              autoOk={false}
              cancelLabel={false}
              firstDayOfWeek={1}
              onTouchTapDay={this.handleTouchTapDay}
              mode={'portrait'}
              open={true}
              ref="calendar"
            />
          </form>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default ReleaseDates
