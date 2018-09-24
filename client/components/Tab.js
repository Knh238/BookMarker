import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ListopiaContainer = props => {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  )
}

ListopiaContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
})

class Listopia extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes} = this.props
    const {value} = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="List One" />
            <Tab label="List Two" />
            <Tab label="List Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <ListopiaContainer>Item One</ListopiaContainer>}
        {value === 1 && <ListopiaContainer>Item Two</ListopiaContainer>}
        {value === 2 && <ListopiaContainer>Item Three</ListopiaContainer>}

        <div style={{marginTop: 20 + 'px'}}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
            </Tabs>
          </AppBar>
          <ListopiaContainer>
            <Link src="https://www.goodreads.com/list/show/17210.Best_Heroine_in_Urban_Fantasy" />
          </ListopiaContainer>
          <ListopiaContainer>
            <Link src="https://www.goodreads.com/list/show/1023.Best_Strong_Female_Fantasy_Novels" />
          </ListopiaContainer>
          <ListopiaContainer>
            <Link src="https://www.goodreads.com/list/show/397.Best_Paranormal_Romance_Series" />
          </ListopiaContainer>
          <ListopiaContainer>Item Four</ListopiaContainer>
        </div>

        <div className={classes.root}>
          <Paper style={{width: 500}}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<PhoneIcon />} />
              <Tab icon={<FavoriteIcon />} />
              <Tab icon={<PersonPinIcon />} />
            </Tabs>
          </Paper>
          <ListopiaContainer>Contacts</ListopiaContainer>
          <ListopiaContainer>Likes</ListopiaContainer>
          <ListopiaContainer>Messages</ListopiaContainer>
        </div>
      </div>
    )
  }
}

Listopia.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(Listopia)

/* https://www.goodreads.com/list/show/17210.Best_Heroine_in_Urban_Fantasy

https://www.goodreads.com/list/show/1023.Best_Strong_Female_Fantasy_Novels

https://www.goodreads.com/list/show/397.Best_Paranormal_Romance_Series */
