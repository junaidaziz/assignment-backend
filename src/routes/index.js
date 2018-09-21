const express = require('express');
const session = require("express-session")
// Custom Modules
const app = express()

app.use('/api', require('./Api'))
module.exports = app;
