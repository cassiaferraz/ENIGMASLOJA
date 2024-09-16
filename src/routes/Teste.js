// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIteste.js');

 
// Rota para exibir "Olá, mundo!"
app.get('/hab', apiController.getUserHab);
 
 
module.exports = app;