// import React from 'react'
// import PropTypes from 'prop-types'

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import Table, {
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow
// } from '@material-ui/core/Table'
// import {createMuiTheme} from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
// const theme = createMuiTheme({palette: {type: 'dark'}})

// class Home extends React.Component {
//   render() {
//     return (
// <MuiThemeProvider theme={theme}>
// <Typography variant="headline" color="secondary" align="center">
//   My books
// </Typography>
// <Typography variant="headline" color="secondary" align="center">
//   because girl, your kindle is ON FIYA
// </Typography>

/* <Table title="my books"> */

/* <Typography variant="title" color="secondary" noWrap>
            My books
          </Typography> */

/* <TableHead /> My books!
          {/* <TableRow>
              <TableCell key="author">author </TableCell>
              {/* <TableCell key="genre">genre</TableCell>
              <TableCell key="title">title</TableCell>
              <TableCell key="series">series number </TableCell> */
/* </TableRow>
          </TableHead> */
/* <TableBody> */
/* <TableRow key={`${n.firstName}-${n.lastName}`}>
              {' '}
              tba
              <TableCell> add stuff later</TableCell>
            </TableRow> */
/* </TableBody> */
/* </Table>
      </MuiThemeProvider>
    )
  }
} */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
}

class Home extends React.Component {
  // const { classes } = props;
  render() {
    return (
      <Card
        style={{
          float: 'none',
          width: '55%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {' '}
        <Typography variant="display3" align="center">
          Books
        </Typography>
        <CardMedia
          component="img"
          // className={styles.media}
          height="50%"
          image="/bluesplotches.jpg"
          title="Contemplative Reptile"
          fullwidth
        />
        <CardContent>
          <Typography variant="display2">
            Because girl, your kindle is ON FI-YA!
          </Typography>
        </CardContent>
      </Card>
      // </div>
    )
  }
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Home)
export default connect()(Home)

// Home.propTypes = {
//   classes: PropTypes.object.isRequired
// }
/* <Table /> */
/* <TableBody />
<TableCell />
<TableFooter />
<TableHead />
<TablePagination />
<TableRow />
<TableSortLabel /> */
