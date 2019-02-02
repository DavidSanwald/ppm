import React from 'react'
import {connect} from 'react-redux'
import Project from './Project'
import * as R from 'ramda'

const assigned = R.compose(
  R.not,
  R.propEq('project', 'unassigned'),
)
const mapStateToProps = ({employees, projects, tasks}) => {
  return {
    projects,
    employees,
    tasks,
  }
}

const ProjectsContainer = connect(mapStateToProps)(ProjectList)

function ProjectList({projects, employees, handleSubmit}) {
  return (
    <div>
      <h1>Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>StartDate</th>
            <th>Slack</th>
            <th>Days</th>
            <th>AssignedTasks</th>
            <th>EndDate</th>
            <th>Employee</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <Project key={project.id} id={project.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ProjectsContainer
