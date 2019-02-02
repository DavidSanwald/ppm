import React from 'react'
import {connect} from 'react-redux'
import {assignTask, updateTask, deleteTask} from './actions'
import DropDown from './DropDown'
import * as R from 'ramda'
const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  const {projects, tasks} = state
  const task = tasks.filter(R.propEq('id', id))[0]
  return {task, projects}
}
const mapDispatchToProps = dispatch => {
  return {
    assignTaskProp: taskId => projectId =>
      dispatch(assignTask({id1: projectId, id2: taskId})),
    updateEstimateProp: taskId => estimate =>
      dispatch(updateTask({id: taskId, estimate})),
    deleteTaskProp: id => dispatch(deleteTask({id})),
  }
}

function Task({
  task,
  projects,
  assignTaskProp,
  updateEstimateProp,
  deleteTaskProp,
}) {
  const {name, description, estimate, id, project} = task
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <input
            type="number"
            value={estimate}
            onChange={e => updateEstimateProp(id)(e.target.value)}
          />
        </td>
        <td>
          <DropDown
            changeHandler={assignTaskProp(id)}
            current={project}
            items={projects}
          />
        </td>
        <td>
          <button
            onClick={e => {
              e.preventDefault()
              deleteTaskProp(id)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}

const projectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task)

export default projectContainer
