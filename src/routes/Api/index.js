const express = require('express');
const app = express()

app.use('/v1', require('./V1'))
module.exports = app;
