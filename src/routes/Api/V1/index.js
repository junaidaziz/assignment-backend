const express = require('express');
const session = require("express-session")
// Custom Modules
const app = express()

app.use('/tasks', require('./Task'))

module.exports = app
