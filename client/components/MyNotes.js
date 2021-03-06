import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

function MyNotes(props) {
  const {classes} = props
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Things I liked about this book
        </Typography>
        <Typography variant="headline" component="h2">
          Things I liked about this book
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            margin="normal"
            helperText="thoughts?"
            variant="outlined"
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

MyNotes.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MyNotes)
