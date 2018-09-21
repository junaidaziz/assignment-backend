const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const xmlparser = require('express-xml-bodyparser')
const cron = require('node-cron')
const AppRoot = require('app-root-path')

const {randomTask} = require(`${AppRoot}/src/scripts`)
const createRandomTask = cron.schedule('0 */01 * * * *', () => {
  randomTask.createTask()
}, false)

createRandomTask.start()

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(xmlparser())

app.use('/', require('./src/routes'))

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
