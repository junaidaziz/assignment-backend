const AppRoot = require('app-root-path')
const models = require(`${AppRoot}/src/models`)

const {
  Task,
  sequelize
} = models

const taskHelpers = {}

taskHelpers.createTask = (...props) => {
  return Task.findOne(...props)
}

module.exports = taskHelpers
