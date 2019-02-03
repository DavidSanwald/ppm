import {ADD_EMPLOYEE} from '.././constants/ActionTypes'

const employees = (state = [], action) => {
  const {payload, type} = action
  switch (type) {
    case ADD_EMPLOYEE:
      return [...state, payload]
    default:
      return state
  }
}

export default employees
