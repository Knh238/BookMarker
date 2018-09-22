import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import getList from './store/userReducer'
import {
  Login,
  Signup,
  UserHome,
  Home,
  Books,
  Calender,
  EnhancedTable,
  MyQuotes,
  Tags,
  MyNotes,
  Tab
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.gotList()
  }
  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Calender" component={Calender} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Recommend" component={EnhancedTable} />
        <Route exact path="/MyQuotes" component={MyQuotes} />
        <Route exact path="/MyNotes" component={MyNotes} />
        <Route exact path="/ByTag" component={Tags} />
        <Route exact path="/Tab" component={Tab} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/userHome" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.current.id
    // category: state.product.category
  }
}

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     },
//     products: () => dispatch(getProducts()),
//     categoryList: () => dispatch(getCategoryList()),
//     allUsers: () => dispatch(fetchAllUsers()),
//     reviews: () => dispatch(getAllReviews()),
//     orders: () => dispatch(getOrders())
//   }
// }
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     ...state,
//     list: state.user.list
//     // isLoggedIn: !!state.user.id
//   }
// }

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    gotList: () => dispatch(getList)
  }
}
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
//export default withRouter(connect(mapState, mapDispatch)(Routes))
