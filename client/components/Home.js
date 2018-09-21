import React from 'react'
import PropTypes from 'prop-types'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core/Table'
import {createMuiTheme} from '@material-ui/core/styles'
const theme = createMuiTheme({palette: {type: 'dark'}})

class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Table title="my books">
          <h1> my books!</h1>
          {/* <TableHead /> My books!
          {/* <TableRow>
              <TableCell key="author">author </TableCell>
              {/* <TableCell key="genre">genre</TableCell>
              <TableCell key="title">title</TableCell>
              <TableCell key="series">series number </TableCell> */}
          {/* </TableRow>
          </TableHead> */}
          {/* <TableBody> */}
          {/* <TableRow key={`${n.firstName}-${n.lastName}`}>
              {' '}
              tba
              <TableCell> add stuff later</TableCell>
            </TableRow> */}
          {/* </TableBody> */}
        </Table>
      </MuiThemeProvider>
    )
  }
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default Home
/* <Table /> */
/* <TableBody />
<TableCell />
<TableFooter />
<TableHead />
<TablePagination />
<TableRow />
<TableSortLabel /> */
