import * as R from 'ramda'
import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_PROJECT,
  ASSIGN_TASK,
} from '.././constants/ActionTypes'

const idLens = R.lensProp('id')
const estimateLens = R.lensProp('estimate')
const assignedToLens = R.lensProp('assignedTo')

const tasks = (state = [], action) => {
  const {payload, type} = action
  switch (type) {
    case ADD_TASK:
      return [...state, {...payload, assignedTo: 'unassigned'}]
    case DELETE_TASK:
      return R.reject(R.propEq('id', payload.id), state)
    case ASSIGN_TASK:
      return R.map(task => {
        if (task.id === payload.taskId) {
          return {...task, assignedTo: payload.projectId}
        }
        return task
      }, state)
    case UPDATE_TASK:
      return R.map(task => {
        if (R.view(idLens, task) === R.view(idLens, payload)) {
          return R.set(estimateLens, R.view(estimateLens, payload), task)
        }
        return task
      }, state)
    case DELETE_PROJECT:
      return R.map(task => {
        if (R.view(assignedToLens, task) === R.view(idLens, payload)) {
          return R.set(assignedToLens, 'unassigned', task)
        }
        return task
      }, state)

    default:
      return state
  }
}
export default tasks
