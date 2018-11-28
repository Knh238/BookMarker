// import React from 'react'
// import moment from 'moment'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import StarRatingComponent from 'react-star-rating-component'

// export default class Listopia extends Component {
//   constructor(props) {
//     super(props)
//     const product = this.props.selected
//     this.state = {
//       productId: product.id,
//       title: '',
//       description: '',
//       rating: 0
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//   onStarClick(nextValue, prevValue, name) {
//     this.setState({rating: nextValue})
//   }
//   //   handleSubmit = event => {
//   //     event.preventDefault()
//   //     this.props.addNewRating({...this.state})
//   //   }

//   render() {
//     return (
//       <div>
//         <label htmlFor="rating"> How would you rate this product? </label>
//         <StarRatingComponent
//           name="rating"
//           starCount={5}
//           starColor={'DeepPink'}
//           value={this.state.rating}
//           onChange={this.handleChange}
//           onStarClick={this.onStarClick.bind(this)}
//         />
//       </div>
//     )
//   }
// }

//    <ul>
//          {revs.map(rev => (
//            <li key={rev.id}>
//              <h3>{rev.title}</h3>
//              <h5 className="text-muted">{rev.date}</h5>
//              <p className="card-text">{rev.description}</p>
//              <p>- {rev.user.fullName}</p>
//              <StarRatingComponent
//                name="rate1"
//                starColor="DeepPink"
//                starCount={rev.rating}
//                value={rev.rating}
//              />
//            </li>
//          ))}
//        </ul>
