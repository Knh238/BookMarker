import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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
import Chip from '@material-ui/core/Chip'

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
    title: 'Bloodfever (Fever #2) ',
    author: 'Karen Marie Moning',
    text:
      'It’s a strange new world out there and the rules have changed: It’s every princess for herself',

    size: 'display2',
    color: 'primary'
  },

  {
    img: 'https://cdn140.picsart.com/273914493013201.jpg?r1024x1024',
    title: 'Darkfever (Fever, #1)',
    author: 'Karen Marie Moning',
    text:
      'I might be feeling bruised and bewildered, but by God I looked good. Like a smile that I didn’t really feel, presenting a together appearance made me feel more together inside, and I badly needed bolstering today.',
    size: 'display1',
    color: 'primary'
  },
  {
    img: 'https://cdn140.picsart.com/273745367018201.jpg?c480x480',
    title: 'First Grave on the Right (Charley Davidson, #1)',
    author: ' Darynda Jones',
    text:
      '“A genetic tendency toward mental illness is dangerous, too, but you don’t see me complaining.”',
    size: 'display2'
  },
  {
    img: 'https://cdn140.picsart.com/274874466003201.jpg?c480x480',
    title: 'First Grave on the Right (Charley Davidson, #1)',
    author: ' Darynda Jones ',
    text:
      '“Maybe a few feet off-kilter, but close enough to call them a win in my book. No matter that my book was titled How to Call Even Your Most Dismal Failures a Win and Not Feel Guilty About It.”',
    size: 'display1',
    color: 'primary'
  },
  {
    img: 'https://cdn141.picsart.com/274706808039201.jpg?c480x480',
    title: 'Fifth Grave Past the Light (Charley Davidson, #5)',
    author: ' Darynda Jones ',
    text:
      '“You know how I’ve never told you certain things, because I didn’t want you to have to seek therapy?”',
    size: 'display2'
  },
  {
    img: 'https://cdn140.picsart.com/274618778019201.jpg?c480x480',
    title: 'The Unyielding (Call Of Crows, #3) ',
    author: 'Shelly Laurenston',
    text:
      '“It amazes me that more people haven’t shot you in the head.” “That’s mean! People love me.” “Imaginary people?” “They talk to me and tell me I’m pretty and inform me when the neighbor’s dog is stalking me in the name of the high god Satan . . . so how imaginary can they be?” “What bothers me is that I really can’t tell if you’re joking.” She grinned. “I know.”',
    size: 'headline',
    color: 'primary'
  },
  {
    img: 'https://cdn131.picsart.com/274281406021201.png?c480x480',
    title: 'Burn for Me (Hidden Legacy, #1)',
    author: 'Ilona Andrews ',
    text:
      '“I have a family full of quirky people. Someone has to be sensible so all of you can enjoy being reckless weirdos.” “You have to live a little.” Grandma fitted the track bar into the cog on the track. “Go out with a bad boy. Run headfirst into a fight. Get roaring drunk. Something!”',
    size: 'display1'
  },
  {
    img: 'https://cdn131.picsart.com/274469163001201.jpg?c480x480',
    title: 'First Grave on the Right (Charley Davidson, #1)',
    author: 'Darynda Jones',
    text: 'Sobbing like a movie star in rehab was not the best beauty regimen.',
    size: 'display3',
    color: 'primary'
  },
  {
    img: 'https://cdn140.picsart.com/274347317000201.jpg?c480x480',
    title: `Leopard'\s Blood (Leopard People #9)'`,
    author: 'Christine Feehan',
    text:
      'YOU know that song by Taylor Swift, ‘Wildest Dreams’?” Sonia asked. She bit off the end of her fried zucchini. “That’s Joshua. Tall. Handsome as hell. Okay, gorgeous. But he has the bad-boy thing down. Maybe more like badass. Either way, it isn’t going to end well for me.”',
    size: 'headline',
    color: 'primary'
  },
  {
    img: 'https://cdn140.picsart.com/274127277046201.jpg?c480x480',
    title: 'Hot and Badgered',
    author: 'Shelly Laurenston',
    text:
      '“No. I don’t have an eating disorder. I have a panic disorder and bouts of depression. I do worry I might start hoarding at some point, but it hasn’t happened yet. And, of course, when one needs a sense of control in one’s life it can definitely lead to an eating disorder or hoarding. But, personally, I’m more worried about the hoarding. Mostly because I do enjoy food and I don’t enjoy vomiting.',
    size: 'headline',
    color: 'primary'
  },
  {
    img: 'https://cdn140.picsart.com/274127277046201.jpg?c480x480',
    title: 'Fifth Grave Past the Light (Charley Davidson, #5) ',
    author: 'Darynda Jones ',
    text: 'Honestly, who brings an iguana to a party?',
    size: 'display3',
    color: 'primary'
  },
  {
    img: 'https://cdn130.picsart.com/273322670015201.jpg?c480x480',
    title: ' Darkfever (Fever, #1) ',
    author: 'Karen Marie Moning',
    text:
      '“Sometimes, Ms. Lane,” he said, “one must break with one’s past to embrace one’s future. It is never an easy thing to do. It is one of the distinguishing characteristics between survivors and victims. Letting go of what was, to survive what is.” He slid the last bolt',
    size: 'headline'
  }
]
const stylesC = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
})
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
            <Typography
              className="centered"
              variant={tile.size}
              color={tile.color}
            >
              {tile.text}
            </Typography>
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
export default connect()(MyQuotes)
