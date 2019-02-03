import * as types from '.././constants/ActionTypes'
import tasks from './tasks'

const exampleTask1 = {
  name: 'testname',
  description: 'testdescription',
  id: 1,
  estimate: 2,
  assignedTo: 'unassigned',
}

const exampleTask1Assigned = {
  name: 'testname',
  description: 'testdescription',
  id: 1,
  estimate: 2,
  assignedTo: 1,
}

const exampleTask2 = {
  name: 'testname',
  description: 'testdescription',
  id: 2,
  estimate: 2,
  assignedTo: 'unassigned',
}

const updatedExampleTask1 = {
  name: 'testname',
  description: 'testdescription',
  id: 1,
  assignedTo: 'unassigned',
  estimate: 3,
}

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(tasks(undefined, [])).toEqual([])
  })

  it('should handle ADD_TASKS', () => {
    expect(tasks([], {type: types.ADD_TASK, payload: exampleTask1})).toEqual([
      exampleTask1,
    ])
  })

  it('should be able to handle UPDATE_TASK', () => {
    const nextState = tasks([exampleTask1, exampleTask2], {
      type: types.UPDATE_TASK,
      payload: {id: 1, estimate: 3},
    })
    expect(nextState).toEqual([updatedExampleTask1, exampleTask2])
  })

  it('should handle ASSIGN_TASK', () => {
    const nextState = tasks([exampleTask1], {
      type: types.ASSIGN_TASK,
      payload: {taskId: 1, projectId: 1},
    })
    expect(nextState[0].assignedTo).toEqual(1)
  })

  it('should update an assigned task', () => {
    const nextState = tasks([exampleTask1Assigned], {
      type: types.DELETE_PROJECT,
      payload: {id: 1},
    })
    expect(nextState[0].assignedTo).toEqual('unassigned')
  })
})
