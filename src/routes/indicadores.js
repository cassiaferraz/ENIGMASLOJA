// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIindicadores');

// Rota para exibir "Olá, mundo!"
app.get('/indicadores', apiController.getUserindicadores);


module.exports = app;
