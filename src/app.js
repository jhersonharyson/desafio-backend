const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//conecta ao banco
mongoose.connect('mongodb://node123:node123@ds041992.mlab.com:41992/node-backend', { useCreateIndex: true, useNewUrlParser: true });

//import routes
const indexRoutes = require('./routes/index');
const gamesRoutes = require('./routes/games');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ap1/v1', indexRoutes);
app.use('/api/v1/servico', gamesRoutes);

module.exports = app;