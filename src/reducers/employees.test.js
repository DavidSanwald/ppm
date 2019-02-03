import * as types from '.././constants/ActionTypes'
import employees from './employees'

const exampleEmployee1 = {
  name: 'testName',
  lastName: 'testLastName',
  supervisor: 'testSupervisor',
  id: 1,
}

describe('employees reducer', () => {
  it('should return empty init state', () => {
    const nextState = employees(undefined, [])
    expect(nextState).toEqual([])
  })

  it('should handle ADD_EMPLOYEE', () => {
    const nextState = employees([], {
      type: types.ADD_EMPLOYEE,
      payload: exampleEmployee1,
    })
    expect(nextState).toEqual([exampleEmployee1])
  })
})
