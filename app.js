const sqlServer = require('./utils/sqlServer');
const express = require('express');
const app = express(); 
const sql = require('mssql/msnodesqlv8');
const XLSX = require('xlsx');
const excel = require('read-excel-file/node');
const path = require('path');
const cors = require ('cors');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


const routes = require('./routes/routes');
const dbConfig = require('./config/dbConfig');
app.use('/', routes);


app.listen(3000, () => {
    console.log('Servidor rodando')
  });
  