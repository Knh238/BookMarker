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
import getList from '../store/userReducer'
const request = require('request')

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
// request.get(
//   'https://www.goodreads.com/review/list/5900639',
//   {json: true},
//   (err, res, body) => {
//     if (err) {
//       return console.log(err)
//     }
//     console.log(body.url)
//     console.log(body.explanation)
//   }
// )
// const theme = createMuiTheme({palette: {type: 'dark'}})
class Books extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // this.state = {list: {}}
  // }
  // const {classes} = this.props
  //   var config = {
  //     headers: {'Content-Type': 'text/xml'}
  //  };

  // request('https://www.goodreads.com/review/list/5900639', { json: true }, (err, res, body) => {
  //   if (err) { return console.log(err); }
  //   console.log(body.url);
  //   console.log(body.explanation);
  // });

  // request
  // ('https://www.goodreads.com/review/list/5900639', { json: true }, (err, res, body) => {
  //   if (err) { return console.log(err); }
  //   console.log(body.url);
  //   console.log(body.explanation);
  // });
  //  axios.put(myUrl, xmlString, config);
  //   componentDidlMount() {
  //     // var config = {
  //     //   headers: {'Content-Type': 'text/xml', responseType: 'json'}
  //     // }
  // // request('https://www.goodreads.com/review/list/5900639', { json: true }, (err, res, body) => {
  // //   if (err) { return console.log(err); }
  // //   console.log(body.url);
  // //   console.log(body.explanation);
  // // });
  //     // const {data} = axios.get(
  //     //   'https://www.goodreads.com/review/list/5900639',
  //     //   config
  //     // )
  //     //'https://www.goodreads.com/series/52637-charley-davidson'
  //     //id, key
  //     // const things = data.json.stringify()
  //     // console.log(data.headers)

  //     // <tbody id="booksBody">
  //     // dispatch(this.props.gotList(data))
  //     this.setState({list: data})
  //   }
  //   catch(err) {
  //     console.error(err)
  //   }
  render() {
    // console.log('this props'.this.props)
    console.log('this state', this.props)
    const books = this.props.list
    console.log('these book', books)
    // return (
    // <MuiThemeProvider theme={theme}>
    // if (books === undefined) {
    //   return <h1> working on it</h1>
    // } else {
    return (
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
    // }
  }
}
const mapStateToProps = state => {
  return {
    // user: state.user,
    ...state,
    user: state.current,
    // id: state.user.current.id,
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    gotList: () => dispatch(getList())
  }
}
// Books.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(Books)

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
