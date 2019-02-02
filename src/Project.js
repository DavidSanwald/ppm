import React from 'react'
import {connect} from 'react-redux'
import {assignProject, deleteProject} from './actions'
import DropDown from './DropDown'
import {DateTime, Duration} from 'luxon'
import * as R from 'ramda'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  const {projects, tasks, employees} = state
  const project = projects.filter(R.propEq('id', id))[0]
  const assignedTasks = tasks.filter(R.propEq('project', id))
  const daysSum = R.compose(
    R.sum,
    R.pluck('estimate'),
  )(assignedTasks)

  const duration = Duration.fromObject({hours: (daysSum + project.slack) * 24})
  const endDate = DateTime.fromMillis(project.startDate)
    .plus(duration)
    .toLocaleString()
  return {daysSum, employees, assignedTasks, project, endDate}
}

const mapDispatchToProps = dispatch => {
  return {
    assignProjectProp: projectId => employeeId =>
      dispatch(assignProject({id1: projectId, id2: employeeId})),
    deleteProjectProp: id => dispatch(deleteProject({id})),
  }
}

function Project({
  assignedTasks,
  endDate,
  assignProjectProp,
  deleteProjectProp,
  employees,
  project,
  daysSum,
}) {
  const {name, startDate, id, slack, employee} = project
  const startDateString = DateTime.fromMillis(startDate).toLocaleString()
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{startDateString}</td>
        <td>{slack}</td>
        <td>{daysSum}</td>
        <td>
          {assignedTasks.map(task => (
            <div key={task.id}>{task.name}</div>
          ))}
        </td>
        <td>{endDate}</td>
        <td>
          <DropDown
            changeHandler={assignProjectProp(id)}
            current={employee}
            items={employees}
          />
        </td>
        <td>
          <button
            onClick={e => {
              e.preventDefault()
              deleteProjectProp(id)
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
)(Project)

export default projectContainer
