const randomTask = {}
const moment = require('moment')
const generateName = require('sillyname');
const AppRoot = require('app-root-path')
const {taskHelpers} = require(`${AppRoot}/src/helpers`)

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '605538',
  key: '21c9384720b7ed56a91b',
  secret: '7f4fea6216cc594d3009',
  cluster: 'ap2',
  encrypted: true
});

randomTask.createTask = async () => {
  let priorityId = Math.floor(Math.random()*4)
  if (priorityId == 0)
    priorityId = (priorityId + 1)

  let dateInterval = 5
  switch (priorityId) {
    case 1:
        dateInterval = 2
      break;
    case 2:
        dateInterval = 4
      break;
    case 3:
        dateInterval = 10
      break;
    case 4:
        dateInterval = 15
      break;
    default:

  }
  const taskValues = {
    title: generateName(),
    description: "Task Description",
    PriorityId: priorityId,
    status: "Current Sprint",
    dueDate: moment().add(Math.floor(Math.random()*dateInterval), 'days'),
    resolvedAt: moment().add(Math.floor(Math.random()*15), 'days'),
  }

  await taskHelpers.createTask(taskValues)
  pusher.trigger('Task-development', 'task-added', {
    "message": "Added new task"
  });

  console.log('Task Created');
}

module.exports = randomTask
