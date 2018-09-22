import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

const primaryGenres = [
  {
    value: 'action',
    label: 'action '
  },
  {
    value: 'romance',
    label: 'romance'
  },
  {
    value: 'sci-fi',
    label: 'sci-fi'
  },
  {
    value: 'self-help',
    label: 'self-help'
  },
  {
    value: 'just for fun',
    label: 'just for fun'
  }
]

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const {classes} = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          helperText="hello"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-genre"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {primaryGenres.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{margin: 8}}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        />
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(OutlinedTextFields)

// import React from 'react'
// import PropTypes from 'prop-types'
// import {withStyles} from '@material-ui/core/styles'
// import Avatar from '@material-ui/core/Avatar'
// import Chip from '@material-ui/core/Chip'
// import FaceIcon from '@material-ui/icons/Face'
// import DoneIcon from '@material-ui/icons/Done'

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap'
//   },
//   chip: {
//     margin: theme.spacing.unit
//   }
// })

// function handleDelete() {
//   alert('You clicked the delete icon.') // eslint-disable-line no-alert
// }

// function handleClick() {
//   alert('You clicked the Chip.') // eslint-disable-line no-alert
// }

// function Chips(props) {
//   const {classes} = props
//   return (
//     <div className={classes.root}>
//       <Chip label="Basic Chip" className={classes.chip} />
//       <Chip
//         avatar={<Avatar>MB</Avatar>}
//         label="Clickable Chip"
//         onClick={handleClick}
//         className={classes.chip}
//       />
//       <Chip
//         avatar={<Avatar src="/static/images/uxceo-128.jpg" />}
//         label="Deletable Chip"
//         onDelete={handleDelete}
//         className={classes.chip}
//       />
//       <Chip
//         avatar={
//           <Avatar>
//             <FaceIcon />
//           </Avatar>
//         }
//         label="Clickable Deletable Chip"
//         onClick={handleClick}
//         onDelete={handleDelete}
//         className={classes.chip}
//       />
//       <Chip
//         icon={<FaceIcon />}
//         label="Clickable Deletable Chip"
//         onClick={handleClick}
//         onDelete={handleDelete}
//         className={classes.chip}
//       />
//       <Chip
//         label="Custom delete icon Chip"
//         onClick={handleClick}
//         onDelete={handleDelete}
//         className={classes.chip}
//         deleteIcon={<DoneIcon />}
//       />
//       <Chip
//         label="Clickable Link Chip"
//         className={classes.chip}
//         component="a"
//         href="#chip"
//         clickable
//       />
//       <Chip
//         avatar={<Avatar>MB</Avatar>}
//         label="Primary Clickable Chip"
//         clickable
//         className={classes.chip}
//         color="primary"
//         onDelete={handleDelete}
//         deleteIcon={<DoneIcon />}
//       />
//       <Chip
//         icon={<FaceIcon />}
//         label="Primary Clickable Chip"
//         clickable
//         className={classes.chip}
//         color="primary"
//         onDelete={handleDelete}
//         deleteIcon={<DoneIcon />}
//       />
//       <Chip
//         label="Deletable Primary Chip"
//         onDelete={handleDelete}
//         className={classes.chip}
//         color="primary"
//       />
//       <Chip
//         avatar={
//           <Avatar>
//             <FaceIcon />
//           </Avatar>
//         }
//         label="Deletable Secondary Chip"
//         onDelete={handleDelete}
//         className={classes.chip}
//         color="secondary"
//       />
//       <Chip
//         icon={<FaceIcon />}
//         label="Deletable Secondary Chip"
//         onDelete={handleDelete}
//         className={classes.chip}
//         color="secondary"
//       />
//     </div>
//   )
// }

// Chips.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(Chips)
