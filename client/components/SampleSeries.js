import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {getSeries} from '../store/booksReducer'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

class SampleSeries extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {list: {}}
  }
  componentDidMount() {
    this.props.gotCurrentSeries('52637')
  }
  render() {
    console.log(this.props)
    const books = this.props.currentSeries
    console.log('these books', books)

    return (
      <Card key={item.book.id._text}>
        <Typography align="center">{item.book.title._text}</Typography>
        <Typography align="center">
          {item.book.authors.author.name._text}
        </Typography>
        <CardContent>
          <Typography>{item.book.description._text.slice(13, 200)}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          // className={styles.media}
          image={item.book.image_url._text}
          title="Contemplative Reptile"
        />
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    user: state.user.current,
    series: state.books.currentSeries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotCurrentSeries: id => dispatch(getSeries(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleSeries)
