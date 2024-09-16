// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/PlanilhaController');

// Rota para exibir "Olá, mundo!"
app.get('/planilhas', apiController. createPlanilha);


module.exports = app;
