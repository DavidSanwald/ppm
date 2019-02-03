import React from 'react'
import * as R from 'ramda'
import {connect} from 'react-redux'

const isAssignedTo = R.propEq('assignedTo')
const projects = R.prop('projects')
const tasks = R.prop('tasks')

const mapStateToProps = state => {
  const allProjects = projects(state)
  const projectSlackSum = R.compose(
    R.sum,
    R.pluck('slack'),
  )(allProjects)
  const allIds = R.pluck('id')(allProjects)
  const isAssigned = R.ap([isAssignedTo], allIds)
  const getEstimatesSum = R.compose(
    R.sum,
    R.pluck('estimate'),
  )
  const totalTaskEstimates = getEstimatesSum(
    R.filter(R.anyPass(isAssigned), tasks(state)),
  )

  return {sum: totalTaskEstimates + projectSlackSum}
}

const sumContainer = connect(mapStateToProps)(Sum)

function Sum({sum}) {
  return (
    <div>
      <h1>Summed Task Time</h1>
      <span>{`${sum} hours`}</span>
    </div>
  )
}

export default sumContainer
