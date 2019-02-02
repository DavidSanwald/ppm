module.exports.combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}
module.exports.createStore = reducer => {
  let state
  let listeners = []
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  const subscribe = listener => {
    listener()
    listeners.push(listener)
  }
  dispatch({})
  return {getState, dispatch, subscribe}
}
