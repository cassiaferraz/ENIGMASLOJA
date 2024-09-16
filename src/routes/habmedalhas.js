// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIHabmedalhas');

// Rota para exibir "Olá, mundo!"
app.get('/habmedalhas', apiController.getUserHabmedalhas);


module.exports = app;
