import React from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  const employee = state.employees.filter(employee => employee.id === id)[0]
  const {lastName, supervisor, name} = employee
  const projects = state.projects.filter(project => project.assignedTo === id)

  return {
    lastName,
    supervisor,
    name,
    projects,
  }
}
const Employee = ({name, lastName, supervisor, projects}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{supervisor}</td>
      <td>
        {projects.map(project => (
          <div key={project.id}>{project.name}</div>
        ))}
      </td>
    </tr>
  )
}

const EmployeeContainer = connect(mapStateToProps)(Employee)

export default EmployeeContainer
