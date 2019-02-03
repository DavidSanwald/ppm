import {v4} from 'uuid'
import {
  ADD_EMPLOYEE,
  ADD_PROJECT,
  ADD_TASK,
  ASSIGN_PROJECT,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_PROJECT,
  ASSIGN_TASK,
} from '.././constants/ActionTypes'

const addEmployee = ({name, lastName, id, supervisor}) => ({
  type: ADD_EMPLOYEE,
  payload: {
    name,
    lastName,
    supervisor,
    id: v4(),
  },
})

const addTask = ({name, id, description, estimate}) => ({
  type: ADD_TASK,
  payload: {
    name,
    description,
    estimate,
    id: v4(),
  },
})
const updateTask = (id, estimate) => ({
  type: UPDATE_TASK,
  payload: {id, estimate},
})
const assignTask = (projectId, taskId) => ({
  type: ASSIGN_TASK,
  payload: {
    projectId,
    taskId,
  },
})
const deleteTask = id => ({type: DELETE_TASK, payload: {id}})

const assignProject = (projectId, employeeId) => ({
  type: ASSIGN_PROJECT,
  payload: {
    projectId,
    employeeId,
  },
})
const addProject = ({name, startDate, slack}) => ({
  type: ADD_PROJECT,
  payload: {id: v4(), name, startDate, slack},
})
const deleteProject = id => ({
  type: DELETE_PROJECT,
  payload: {id},
})
export {
  deleteTask,
  assignTask,
  assignProject,
  addProject,
  updateTask,
  addTask,
  addEmployee,
  deleteProject,
}
