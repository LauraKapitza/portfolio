require('dotenv').config();

const express = require('express')

const app = express()

//default value for local
app.locals.title = `Laura' portfolio website in Express`;

// ROUTES MIDDLEWARE:
const index = require('./routes/index');
app.use('/', index);


module.exports = app;