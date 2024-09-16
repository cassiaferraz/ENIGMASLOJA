// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIPerfil');

// Rota para exibir "Olá, mundo!"
app.get('/perfil', apiController.getUserperfil);


module.exports = app;
