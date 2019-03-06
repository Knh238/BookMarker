import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
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
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import Navbar from './navbar'

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
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

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
    return (
      <div className={styles.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(
              styles.menuButton,
              this.state.open && styles.hide
            )}
          />
          <MenuIcon />
        </Toolbar>
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
            <IconButton onClick={this.handleDrawerClose} />
          </div>
          <List>
            <Divider inset />
            <ListItem component={Link} to="/">
              <ListItemIcon>
                <HomeTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/books">
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="My Books" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/Calendar">
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Upcoming Releases" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/MyQuotes">
              <ListItemIcon>
                <FormatQuoteTwoToneIcon secondary="true" />
              </ListItemIcon>
              <ListItemText primary="MyQuotes" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/MyNotes">
              <ListItemIcon>
                <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary="MyNotes" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/Listopia">
              <ListItemIcon>
                <PollIcon />
              </ListItemIcon>
              <ListItemText primary="ListTopia" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/recommend">
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Recommend to a friend!" />
            </ListItem>
            <Divider inset />
            <ListItem component={Link} to="/ByTag">
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText primary="My Tags" />
            </ListItem>
            <Divider inset />
          </List>
        </Drawer>
        <main className={styles.content}>
          <div className={styles.toolbar} />
        </main>
      </div>
    )
  }
}

export default connect()(Main)
