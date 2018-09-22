import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {createMuiTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import FormatQuoteTwoToneIcon from '@material-ui/icons/FormatQuoteTwoTone'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import BookIcon from '@material-ui/icons/Book'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import PollIcon from '@material-ui/icons/Poll'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// import {mailFolderListItems, otherMailFolderListItems} from './tileData'
// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// }
const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen
    // })
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    // whiteSpace: 'nowrap',
    width: drawerWidth
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen
    // })
  },
  // drawerPaperClose: {
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   }),
  //   width: theme.spacing.unit * 7,
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing.unit * 9
  //   }
  // },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  }
})

// const theme = createMuiTheme({palette: {type: 'dark'}})

class Main extends React.Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
  }
  render() {
    // const {classes, theme} = this.props
    return (
      // <MuiThemeProvider theme={theme}>
      <div className={styles.root}>
        <AppBar
          position="absolute"
          className={classNames(
            styles.appBar,
            this.state.open && styles.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                styles.menuButton,
                this.state.open && styles.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              styles.drawerPaper,
              !this.state.open && styles.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={styles.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {/* {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )} */}
            </IconButton>
          </div>
          <List>
            {/* <Divider> */}
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <li>
              <Divider inset />
            </li>
            <ListItem button component={Link} to="/books">
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="My Books" />
            </ListItem>
            <li>
              <Divider inset />
            </li>

            <ListItem button component={Link} to="/Calender">
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Upcoming Releases" />
            </ListItem>

            <li>
              <Divider inset />
            </li>

            <ListItem button component={Link} to="/MyQuotes">
              <ListItemIcon>
                <FormatQuoteTwoToneIcon secondary />
              </ListItemIcon>
              <ListItemText primary="MyQuotes" />
            </ListItem>

            <li>
              <Divider inset />
            </li>

            <ListItem button component={Link} to="/MyQuotes">
              <ListItemIcon>
                <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary="MyNotes" />
            </ListItem>

            <li>
              <Divider inset />
            </li>
            <ListItem button component={Link} to="/MyQuotes">
              <ListItemIcon>
                <PollIcon />
              </ListItemIcon>
              <ListItemText primary="ListTopia" />
            </ListItem>

            <li>
              <Divider inset />
            </li>
            <ListItem button component={Link} to="/recommend">
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Recommend to a friend!" />
            </ListItem>
            {/* </Divider> */}
          </List>
        </Drawer>
        <main className={styles.content}>
          <div className={styles.toolbar} />
          <Typography noWrap>
            {'You think water moves fast? You should see ice.'}
          </Typography>
        </main>
      </div>
      /* /* </MuiThemeProvider> */
    )
  }
}

/* // Main.propTypes = { */

/* //  classes: PropTypes.object.isRequired,
//  theme: PropTypes.object.isRequired
//  } */

/* // export default withStyles(styles, {withTheme: true})(Main) */

export default Main
// /* /* <List>
//               <ListItem button component={Link} to="/">
//                 <ListItemIcon>
//                   <HomeTwoToneIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Home" />
//               </ListItem>
//               <ListItem button component={Link} to="/books">
//                 <ListItemIcon>
//                   <BookIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="My Books" />
//               </ListItem>
//               <ListItem button component={Link} to="/recommend">
//                 <ListItemIcon>
//                   <SendIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Recommend to a friend!" />
//               </ListItem>
//               <ListItem button component={Link} to="/Calender">
//                 <ListItemIcon>
//                   <CalendarTodayIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Upcoming Releases" />
//               </ListItem>
//               <ListItem button component={Link} to="/MyQuotes">
//                 <ListItemIcon>
//                   <FormatQuoteTwoToneIcon secondary />
//                 </ListItemIcon>
//                 <ListItemText primary="MyQuotes" />
//               </ListItem>
//               <ListItem button component={Link} to="/MyQuotes">
//                 <ListItemIcon>
//                   <ImportContactsIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="MyNotes" />
//               </ListItem>
//               <ListItem button component={Link} to="/MyQuotes">
//                 <ListItemIcon>
//                   <PollIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="ListTopia" />
//               </ListItem>
//               <ListItem button component={Link} to="/recommend">
//                 <ListItemIcon>
//                   <SendIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Recommend to a friend!" />
//               </ListItem>
//             </List> */
