const randomTask = {}
const moment = require('moment')

const TaskPriority = ['High', 'Low', 'Later']
const generateName = require('sillyname');
const AppRoot = require('app-root-path')
const {taskHelpers} = require(`${AppRoot}/src/helpers`)

randomTask.createTask = async () => {
  const taskValues = {
    title: generateName(),
    description: "Task Description",
    priority: TaskPriority[Math.floor(Math.random()*3)],
    status: "In Progress",
    dueDate: moment().add(Math.floor(Math.random()*15), 'days'),
    resolvedAt: moment().add(Math.floor(Math.random()*15), 'days'),
  }

  await taskHelpers.createTask(taskValues)
  console.log('Task Created');
}

module.exports = randomTask
