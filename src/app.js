const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
const index = require('./routes/index');
const downUpRoute = require('./routes/downUpRoute');

app.use('/', index);
app.use('/file', downUpRoute);
module.exports = app;