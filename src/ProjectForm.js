import React, {Component} from 'react'
import * as R from 'ramda'
import {connect} from 'react-redux'
import {addProject} from './actions'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'

const toTimeStamp = R.evolve({startDate: date => date.getTime()})

class ProjectForm extends Component {
  state = {
    name: '',
    startDate: new Date(),
    slack: '',
  }
  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState(oldState => ({...oldState, [name]: value}))
  }
  handleDateChange = date => {
    this.setState(oldState => ({
      ...oldState,
      startDate: date,
    }))
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.setState({name: '', startDate: new Date(), slack: ''})
          this.props.dispatch(addProject(toTimeStamp(this.state)))
        }}
      >
        <label name="name">ProjectName</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <label>Start Date</label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDateChange}
        />
        <label>slack</label>
        <input
          value={this.state.slack}
          type="number"
          onChange={this.handleChange}
          name="slack"
        />
        <button>submit</button>
      </form>
    )
  }
}

export default connect()(ProjectForm)
