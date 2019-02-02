import {
  ADD_PROJECT,
  ASSIGN_PROJECT,
  DELETE_PROJECT,
} from '.././constants/ActionTypes'
import * as R from 'ramda'

const projects = (state = [], action) => {
  const {payload, type} = action
  switch (type) {
    case ADD_PROJECT:
      return [...state, {...payload, employee: 'unassigned'}]
    case ASSIGN_PROJECT:
      if (
        R.filter(R.propEq('employee', payload.employeeId), state).length < 2
      ) {
        return R.map(project => {
          if (project.id !== payload.projectId) {
            return project
          }
          return {...project, employee: payload.employeeId}
        }, state)
      } else {
        console.error('max 2 projects per employee')
        return state
      }
    case DELETE_PROJECT:
      return R.reject(R.propEq('id', payload.id))(state)
    default:
      return state
  }
}
export default projects
