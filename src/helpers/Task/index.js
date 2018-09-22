const AppRoot = require('app-root-path')
const models = require(`${AppRoot}/src/models`)

const {
  Task,
  Priority,
  sequelize,
} = models

const taskHelpers = {}

taskHelpers.createTask = (...props) => {
  return Task.create(...props)
}

taskHelpers.fetchAllTasks = (whereCondition) => {
  return Task.findAll({
    where: whereCondition,
    include: [
      {
        model: Priority,
        attributes: ['id', 'name']
      }
    ],
    order: [
      ["PriorityId", "ASC"],
      ["dueDate", "ASC"],
    ],
    attributes: ['id', 'title', 'description', 'dueDate', 'status', 'PriorityId']
  })
}

taskHelpers.fetchPriorities = (whereCondition) => {
  return Priority.findAll(
    {
      attributes: ['id', 'name']
    }
  )
}

taskHelpers.fetchTaskDetail = (whereCondition) => {
  return Task.findOne({
    where: whereCondition,
    include: [
      {
        model: Priority,
        attributes: ['id', 'name']
      }
    ],
    order: [
      ["PriorityId", "ASC"],
      ["dueDate", "ASC"],
    ]
  }).then(task => {
    if (!task)
      return null
    else return task
  })
}

taskHelpers.updateTask = async (params, taskId) => {
  const task = await Task.findOne({
    where: {
      id: taskId
    }
  })
  if (!task)
    return false

  await task.update(params)
  return task
}

taskHelpers.pluckTaskKeys = async (params) => {
  const task = await Task.findOne({})
  const taskFields = Object.keys(task.dataValues)
  return taskFields
}

taskHelpers.mapTaskParams = (params, taskFields) => {

  const taskParams = {}
  const newKeys = Object.keys(params)

  taskFields.forEach(key => {
    if (newKeys.includes(key))
      taskParams[key] = params[key]
  })
  return taskParams
}

taskHelpers.deleteTask = (whereCondition) => {
  return Task.destroy({
    where: whereCondition
  })
}

module.exports = taskHelpers
