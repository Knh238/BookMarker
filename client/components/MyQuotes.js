import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden'
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: '30%',
    height: '30%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const tileData = [
  {
    img: 'https://cdn141.picsart.com/274671628022201.jpg?r640x640',
    title: 'title of book ',
    author: 'author name ',
    cols: 2,
    featured: true
  },
  {
    img: 'https://cdn140.picsart.com/273914493013201.jpg?r1024x1024',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/273745367018201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/274874466003201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn141.picsart.com/274706808039201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/274618778019201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn131.picsart.com/274281406021201.png?c480x480',
    title: 'title of book ',
    author: 'author name ',
    cols: 2
  },
  {
    img: 'https://cdn131.picsart.com/274469163001201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/274347317000201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/274127277046201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://cdn140.picsart.com/274127277046201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name ',
    cols: 2
  },
  {
    img: 'https://cdn130.picsart.com/273322670015201.jpg?c480x480',
    title: 'title of book ',
    author: 'author name '
  }
]

function MyQuotes(props) {
  const {classes} = props

  return (
    <div className={styles.root}>
      <GridList cellHeight={500} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <ListSubheader component="div">My Fav Quotes</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />

            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={styles.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

/* <div class="container">
  <img src="nature.jpg" alt="Norway" style="width:100%;">
  <div class="text-block"> 
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div> */

MyQuotes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MyQuotes)
