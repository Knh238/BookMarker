import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
// import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
const theme = createMuiTheme({palette: {type: 'dark'}})

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            {/* <MenuButton>
            <MenuIcon> */}

            {/* <div className={classes.root}> */}
            {/* <Drawer variant="permanent"> */}
            {/* classes={{ */}
            {/* //   paper: classes.drawerPaper
            // }}
          // > */}
            {/* <div className={classes.toolbar} /> */}
            <List>
              <ListItem button component={Link} to="/">
                {/* <ListItemText primary="Home" /> */}
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/books">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="My Books" />
              </ListItem>
              <ListItem button component={Link} to="/recommend">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Recommend to a friend!" />
                {/* <ListItemText primary="Cards" /> */}
              </ListItem>
              <ListItem button component={Link} to="/Calender">
                <ListItemText primary="Upcoming Releases" />
                <ListItemIcon>
                  {/* <CalenderIcon /> */}
                  <SendIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem button component={Link} to="/MyQuotes">
                <ListItemText primary="MyQuotes" />
                <ListItemIcon>
                  <StarIcon />
                  {/* <ListItemText primary="MyQuotes" /> */}
                </ListItemIcon>
              </ListItem>
              {/* <ListItemText primary="GridList" />
              </ListItem>
             
                <ListItemText primary="Forms" />
              </ListItem> */}
              {/* <ListItem button component={Link} to="/recommend">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon> */}
              {/* </ListItem> */}
            </List>
            {/* </Drawer> */}
            {/* <main className={classes.content}> */}
            {/* <div className={classes.toolbar} /> */}
            {/* <Link to="/recommend">recommend a book!</Link> */}
            {/* </MenuButton>
            </MenuIcon >  */}
            {/* </MenuButton> */}
            {/* </IconButton> */}
            {/* <Typography variant="title" color="inherit" className={styles.flex}>
              App Bar
            </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}
// Main.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default Main
// export default withStyles(styles)(Main)
