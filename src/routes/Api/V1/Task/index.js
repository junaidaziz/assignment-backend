const express = require('express')
const router = express.Router()
const AppRoot = require('app-root-path')
const {taskHelpers} = require(`${AppRoot}/src/helpers`)

router.get('/', async (req, res, next) => {
  const tasks = await taskHelpers.fetchAllTasks()
  res.json({
    success: true,
    tasks: tasks
  })
})

router.get('/:id', async (req, res, next) => {
  const taksDetail = await taskHelpers.fetchTaskDetail({id: req.params.id})
  const result = {}
  if (!taksDetail){
    result['success'] = false
    result['message'] = 'No Task found'
  } else {
    result['success'] = true
    result['taskDetail'] = taksDetail
  }
  res.json(result)
})

router.put('/:id', async (req, res, next) => {
  const {
    params: {
      id
    },
    body: {
      task
    }
  } = req

  const taskFields = await taskHelpers.pluckTaskKeys()
  const taskParams = await taskHelpers.mapTaskParams(task, taskFields)
  const taksDetail = await taskHelpers.updateTask(taskParams, id)

  const result = {}
  if (!taksDetail){
    result['success'] = false
    result['message'] = 'Task not found or cannot be updated'
  } else {
    result['success'] = true
    result['taskDetail'] = taksDetail
    result['message'] = 'Task updated successfully'
  }
  res.json(result)
})

router.delete('/:id', async (req, res, next) => {
  const response = await taskHelpers.deleteTask({id: req.params.id})
  const result = {}
  if (response == 0){
    result['success'] = false
    result['message'] = 'Task not found or cannot be deleted'
  } else {
    result['success'] = true
    result['message'] = 'Task deleted successfully'
  }
  res.json(result)

})

module.exports = router;
