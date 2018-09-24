import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import {createMuiTheme} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import {getUserList, getSeries} from '../store/booksReducer'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'

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

class Books extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {list: {}}
  }
  componentDidMount() {
    this.props.gotCurrentSeries('52637')
    this.props.gotUserList('5900639')
  }
  render() {
    // console.log('this props'.this.props)
    //console.log('this props', this.props)
    console.log(this.props)
    const books = this.props.userlist
    console.log('these books', books)
    const shelf = this.props.books.userList
    // return (
    // <MuiThemeProvider theme={theme}>
    // if (books === undefined) {
    //   return <h1> working on it</h1>
    // } else {
    //shelf===undefined?(<div><h1>not here yet</h1></div>):
    return (
      <Paper className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell flexGrow="2">Title</TableCell>
              <TableCell flexGrow="1">Author </TableCell>
              <TableCell>Series Name </TableCell>
              <TableCell>Series Number </TableCell>
              <TableCell flexGrow="1">Description</TableCell>
              <TableCell flexGrow="1">Cover Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shelf.map(item => {
              return (
                <TableRow key={item.book.id._text}>
                  <TableCell>{item.book.title._text}</TableCell>
                  <TableCell>{item.book.authors.author.name._text}</TableCell>
                  <TableCell>
                    <Link to="/sampleSeries" className="cuteLink">
                      {item.book.title._text.slice(-111, -4)}
                    </Link>
                  </TableCell>
                  <TableCell>{item.book.title._text.slice(-4, -1)} </TableCell>
                  <TableCell>
                    {' '}
                    <img src={item.book.image_url._text} />
                  </TableCell>
                  <TableCell>
                    {item.book.description._text.slice(1, 500)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
const mapStateToProps = state => {
  return {
    // user: state.user,
    ...state,
    user: state.user.current,
    // id: state.user.current.id,
    series: state.books.currentSeries,
    userList: state.books.userList
  }
}
const id = '52637'
const mapDispatchToProps = dispatch => {
  return {
    gotUserList: Userid => dispatch(getUserList(Userid)),
    gotCurrentSeries: id => dispatch(getSeries(id))
  }
}
// Books.propTypes = {
//   classes: PropTypes.object.isRequired
// }
//export default connect(mapStateToProps)(Books)
export default connect(mapStateToProps, mapDispatchToProps)(Books)

/* <div
className="books"
style={{
  float: 'none',
  width: '250px',
  marginLeft: 'auto',
  marginRight: 'auto'
}}
>
{' '}
<TextField
  id="outlined-search"
  label="Search field"
  type="search"
  className={styles.textField}
  margin="normal"
  variant="outlined"
/>

   <div>
          <ul title="whats on my shelf">
            {shelf.map(item => {
              return (
                <li key={item.book.id._text}>
                  <h2>book title: {item.book.title._text}</h2>
                  <h3> author: {item.book.authors.author.name._text}</h3>
                  <h4> description: {item.book.description._text}</h4>
                  <img src={item.book.image_url._text} />
                </li>
              )
            })}
          </ul>
        </div> */

// return (
//   <Table>
//     <TableHead>
//       <TableRow>
//         {/* <TableCell padding="checkbox">
//         <Checkbox
//           indeterminate={numSelected > 0 && numSelected < rowCount}
//           checked={numSelected === rowCount}
//           onChange={onSelectAllClick}
//         /> */}
//         {/* </TableCell> */}
//         <TableCell numeric>Title</TableCell>
//         <TableCell numeric>Author </TableCell>
//         <TableCell numeric>Description</TableCell>
//         <TableCell numeric>Cover Image</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {shelf.map(item => {
//         return (
//           <TableRow key={item.book.id._text}>
//             <TableCell>{item.book.title._text}</TableCell>
//             <TableCell>{item.book.authors.author.name._text}</TableCell>
//             <TableCell>
//               {item.book.description._text.slice(13, 200)}
//             </TableCell>
//             <TableCell>
//               {' '}
//               <img src={item.book.image_url._text} />
//             </TableCell>
//           </TableRow>
//         )
//       })}
//     </TableBody>
//   </Table>
// )
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
/* <Card key={item.book.id._text}>
<Typography align="center">
  {item.book.title._text}
</Typography>
<Typography  align="center">
  {item.book.authors.author.name._text}
</Typography>
<CardContent>
  <Typography >
    {item.book.description._text.slice(13, 200)}
  </Typography>
</CardContent>
<CardMedia
  component="img"
  // className={styles.media}
  image={item.book.image_url._text}
  title="Contemplative Reptile"
/>
</Card> */
// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'
/* <GridList display="flex">
{shelf.map(item => {
  return (
    <GridListTile key={item.book.id._text}>
      <Typography align="center">{item.book.title._text}</Typography>
      <Typography align="center">
        {item.book.authors.author.name._text}
      </Typography>

      <Typography>
        {item.book.description._text.slice(13, 200)}
      </Typography>

      <img src={item.book.image_url._text} />
    </GridListTile>
  )
})}
</GridList> */
