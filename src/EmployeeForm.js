import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {addEmployee} from './actions'
class EmployeeForm extends Component {
  state = {
    name: '',
    lastName: '',
    supervisor: '',
  }
  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState(oldState => ({...oldState, [name]: value}))
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.setState({name: '', lastName: '', supervisor: ''})
          this.props.dispatch(addEmployee(this.state))
        }}
      >
        <label name="name">Name</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <label>Last Name</label>
        <input
          value={this.state.lastName}
          onChange={this.handleChange}
          name="lastName"
        />
        <label>Supervisor</label>
        <input
          value={this.state.supervisor}
          onChange={this.handleChange}
          name="supervisor"
        />
        <button>submit</button>
      </form>
    )
  }
}

export default connect()(EmployeeForm)
