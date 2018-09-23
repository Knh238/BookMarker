import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Table from '@material-ui/core/Table'
import {createMuiTheme} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import {getList} from '../store/userReducer'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

const theme = createMuiTheme({palette: {type: 'dark'}})
class Books extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {list: props.list}
  }
  // const {classes} = this.props

  render() {
    // console.log('this props'.this.props)
    const books = this.props.list
    console.log('these book', books)
    return (
      // <MuiThemeProvider theme={theme}>
      <div
        className="books"
        style={{
          float: 'none',
          width: '250px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <ul title="my recommendations for">
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={styles.textField}
            margin="normal"
            variant="outlined"
          />
          <li>this stuff</li>
        </ul>
        {/* // </MuiThemeProvider> */}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    // user: state.user,
    ...state,
    user: state.user.current,
    id: state.user.current.id,
    list: state.user.list
  }
}
// const mapDispatch = state => {
//   return {
//     ...state,
//     user: state.user.current,
//     id: state.user.current.id,
//     list: state.user.list
//   }
// }
// Books.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default connect(mapStateToProps)(Books)

/* <TableRow>
<TableCell padding="checkbox">
  <Checkbox
    indeterminate={numSelected > 0 && numSelected < rowCount}
    checked={numSelected === rowCount}
    onChange={onSelectAllClick}
  />
</TableCell>
{columnData.map(column => {
  return (
    <TableCell
      key={column.id}
      numeric={column.numeric}
      padding={column.disablePadding ? 'none' : 'default'}
      sortDirection={orderBy === column.id ? order : false}
    >
      <Tooltip
        title="Sort"
        placement={column.numeric ? 'bottom-end' : 'bottom-start'}
        enterDelay={300}
      >
        <TableSortLabel
          active={orderBy === column.id}
          direction={order}
          onClick={this.createSortHandler(column.id)}
        >
          {column.label}
        </TableSortLabel>
      </Tooltip>
    </TableCell>
  )
}, this)}
</TableRow>
</TableHead> */
