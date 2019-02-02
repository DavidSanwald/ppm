import React from 'react'
import Employee from './Employee'
import {connect} from 'react-redux'

const mapStateToProps = ({employees}) => {
  return {
    employees,
  }
}

const EmployeesContainer = connect(mapStateToProps)(EmployeeList)

function EmployeeList({employees}) {
  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Supervisor</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <Employee key={employee.id} {...employee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default EmployeesContainer
