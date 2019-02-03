import React from 'react'
import {connect} from 'react-redux'
import {assignProject} from './actions'
import Task from './Task'

const mapStateToProps = ({employees, projects, tasks}) => {
  return {
    projects,
    employees,
    tasks,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: id1 => id2 => dispatch(assignProject({id1: id1, id2: id2})),
  }
}

const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList)

function TaskList({projects, employees, tasks, handleSubmit}) {
  return (
    <div>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Estimate</th>
            <th>Project</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <Task key={task.id} id={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default TasksContainer
