import * as types from '.././constants/ActionTypes'
import projects from './projects'

const exampleProject1 = {
  name: 'testname',
  slack: 0,
  assignedTo: 'unassigned',
  id: 1,
  startDate: 666,
}

const exampleProject1Assigned = {
  name: 'testname',
  slack: 0,
  assignedTo: 1,
  id: 1,
  startDate: 666,
}

describe('projects reducer', () => {
  it('should init with empty state', () => {
    const nextState = projects(undefined, [])
    expect(nextState).toEqual([])
  })

  it('should handle to handle ADD_PROJECT', () => {
    const nextState = projects([], {
      type: types.ADD_PROJECT,
      payload: exampleProject1,
    })
    expect(nextState).toContainEqual(exampleProject1)
  })
})
