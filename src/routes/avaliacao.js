// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIAvaliacao');

// Rota para exibir "Olá, mundo!"
app.get('/avaliacao/user', apiController.getUserAvaliations);


module.exports = app;
