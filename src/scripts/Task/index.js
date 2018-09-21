const randomTask = {}
const moment = require('moment')
const generateName = require('sillyname');
const AppRoot = require('app-root-path')
const {taskHelpers} = require(`${AppRoot}/src/helpers`)

randomTask.createTask = async () => {
  let priorityId = Math.floor(Math.random()*4)
  if (priorityId == 0)
    priorityId = (priorityId + 1)

  const taskValues = {
    title: generateName(),
    description: "Task Description",
    PriorityId: priorityId,
    status: "In Progress",
    dueDate: moment().add(Math.floor(Math.random()*15), 'days'),
    resolvedAt: moment().add(Math.floor(Math.random()*15), 'days'),
  }

  await taskHelpers.createTask(taskValues)
  console.log('Task Created');
}

module.exports = randomTask
