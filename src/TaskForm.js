import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "./actions";

class TaskForm extends Component {
  state = {
    name: "",
    description: "",
    estimate: ""
  };
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(oldState => ({ ...oldState, [name]: value }));
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.setState({ name: "", description: "", estimate: "" });
          this.props.dispatch(addTask(this.state));
        }}
      >
        <label name="name">Task Name</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <label>Description</label>
        <input
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />
        <label>Estimate</label>
        <input
          value={this.state.estimate}
          type="number"
          onChange={this.handleChange}
          name="estimate"
        />
        <button>submit</button>
      </form>
    );
  }
}

export default connect()(TaskForm);
