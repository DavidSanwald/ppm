import React from 'react'
import EmployeeForm from './EmployeeForm'
import ProjectForm from './ProjectForm'
import TaskForm from './TaskForm'
import EmployeeList from './EmployeeList'
import TaskList from './TaskList'
import ProjectList from './ProjectList'

function App() {
  return (
    <>
      <EmployeeForm />
      <ProjectForm />
      <TaskForm />
      <EmployeeList />
      <TaskList />
      <ProjectList />
    </>
  )
}
export default App
