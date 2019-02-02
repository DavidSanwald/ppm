import * as R from 'ramda'
import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_PROJECT,
  ASSIGN_TASK,
} from '.././constants/ActionTypes'

const tasks = (state = [], action) => {
  const {payload, type} = action
  switch (type) {
    case ADD_TASK:
      return [...state, {...payload, project: 'unassigned'}]
    case DELETE_TASK:
      return R.reject(R.propEq('id', payload.id), state)
    case ASSIGN_TASK:
      return R.map(task => {
        if (task.id === payload.taskId) {
          return {...task, project: payload.projectId}
        }
        return task
      }, state)
    case UPDATE_TASK:
      return R.map(task => {
        if (task.id === payload.id) {
          return {...task, estimate: payload.estimate}
        }
        return task
      }, state)
    case DELETE_PROJECT:
      return R.map(task => {
        if (task.project === payload.id) {
          return {...task, project: 'unassigned'}
        }
        return task
      }, state)

    default:
      return state
  }
}
export default tasks
