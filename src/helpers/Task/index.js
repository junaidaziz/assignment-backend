const AppRoot = require('app-root-path')
const models = require(`${AppRoot}/src/models`)

const {
  Task,
  sequelize
} = models

const taskHelpers = {}

taskHelpers.createTask = (...props) => {
  return Task.create(...props)
}

taskHelpers.getTask = (whereCondition) => {
  return Task.findAll({
    where: whereCondition
  })
}

taskHelpers.findOneTask = (whereCondition) => {
  return Task.findOne({
    where: whereCondition
  })
}

taskHelpers.updateTask = async (params, taskId) => {
  const task = await Task.findOne({
    where: {
      id: taskId
    }
  })

  params = await taskHelpers.mapTaskParams(params, Object.keys(task.dataValues))
  task.update(params)
}

taskHelpers.pluckTaskKeys = async (params) => {
  const task = await Task.findOne()
  const taskFields = Object.keys(task.dataValues)
  return taskFields
}

taskHelpers.mapTaskParams = (params, taskFields) => {

  const taskParams = {}
  const newKeys = Object.keys(params)

  newKeys.forEach(key => {
    if (taskFields.includes(key))
      taskParams[key] = params[key]
  })
  return taskParams
}

module.exports = taskHelpers
