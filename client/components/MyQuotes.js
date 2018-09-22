import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const tileData = [
  {
    img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    title: 'title of book ',
    author: 'author name ',
    cols: 2,
    featured: true
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'title of book ',
    author: 'author name ',
    cols: 2
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
    title: 'title of book ',
    author: 'author name '
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/star.jpg',
    title: 'title of book ',
    author: 'author name ',
    cols: 2
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
    title: 'title of book ',
    author: 'author name '
  }
]

function MyQuotes(props) {
  const {classes} = props

  return (
    <div className={styles.root}>
      <GridList cellHeight={180} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <ListSubheader component="div">December</ListSubheader>
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

MyQuotes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MyQuotes)
