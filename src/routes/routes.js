// routes/apiRoutes.js
const express = require('express');
const app = express.Router();

const perfilRoutes = require('./perfil.js') // Importe o arquivo de rotas dos perfis
app.use('/', perfilRoutes) // Use as rotas dos perfis


const indicadoresRoutes = require('./indicadores.js') // Importe o arquivo de rotas dos indicadores
app.use('/', indicadoresRoutes) // Use as rotas dos indicadores


const avaliacaoRoutes = require('./avaliacao.js') // Importe o arquivo de rotas das avaliações
app.use('/', avaliacaoRoutes) // Use as rotas das avaliações


const habmedalhasRoutes = require('./habmedalhas.js') // Importe o arquivo de rotas das Habilidades e medalhas
app.use('/', habmedalhasRoutes) // Use as rotas das Habilidades e medalhas

const planilhaRoutes = require('./planilhas.js') // Importe o arquivo de rotas das Habilidades e medalhas
app.use('/', planilhaRoutes) // Use as rotas das Habilidades e medalhas

const testeHab = require('./Teste.js') //
app.use('/', testeHab) 

module.exports = app;
