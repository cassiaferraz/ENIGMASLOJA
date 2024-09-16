const sqlServer = require('../utils/sqlServer');
const express = require('express');
const app = express(); 
const sql = require('mssql/msnodesqlv8');
const XLSX = require('xlsx');
const excel = require('read-excel-file/node');
const path = require('path');



function createUser() {
// // Ler dados do Excel
const filePath = path.join(__dirname, 'planilhas', 'avaliacaoindividual198.xlsx');
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);


// Mapeamento de nomes de valores
const valueMapping = {
  'OK': true,
  'NOK': false
};


// Mapeamento de nomes de colunas
const columnMapping = {
  'ID': 'ID_TECNICO',
  'Hora de início': 'DATA',
  'Nome': 'AVALIADOR',
  'Uniforme': 'POSTURA_UNIFORME',
  'Crachá': 'POSTURA_CRACHA',
  'Bota': 'POSTURA_BOTA',
  'Mala': 'POSTURA_MALA',
  'Comunicação': 'POSTURA_COMUNICACAO',
  'Comparecimento Almox' : 'ASSIDUIDADE_ALMOX',
  'Banco de Horas' : 'ASSIDUIDADE_BANCO',
  'Gestão de rota' : 'ASSIDUIDADE_ROTA',
  'Horário de Almoço' : 'ASSIDUIDADE_ALMOCO',
  'Início Atividades' : 'ASSIDUIDADE_INICIO',
  'Limpeza Interna' : 'VEICULO_LIMPEZAINTERNA',
  'Limpeza Externa' : 'VEICULO_LIMPEZAEXTERNA',
  'Organização Frente' : 'VEICULO_ORGANIZACAOFRENTE',
  'Organização Baú' : 'VEICULO_ORGANIZACAOBAU',
  'Horário - Recarga bateria' : 'VEICULO_RECARGA',
  'Multas' : 'VEICULO_MULTAS',
  'Sinistros' : 'VEICULO_SINISTROS',
  'Laudo - Preenchimento' : 'LAUDOS_PREENCHIDOS'
  
  
};

// Conectar ao banco de dados
sql.connect(dbConfig).then((pool) => {
  xlData.forEach((row) => {
    const mappedRow = {};
    for (const col in row) {
      if (columnMapping[col]) {
        if (valueMapping[row[col]] !== undefined) {
          mappedRow[columnMapping[col]] = valueMapping[row[col]];
        } else {
          // Se o valor não for "OK" nem "NOK", mantenha o valor original
          mappedRow[columnMapping[col]] = row[col];
        }
      }
    }
  

    // Inserir no banco de dados
    const sql = 'INSERT INTO Avaliacoes_individuais (ID_TECNICO, DATA, AVALIADOR, POSTURA_UNIFORME, POSTURA_CRACHA, POSTURA_BOTA, POSTURA_MALA, POSTURA_COMUNICACAO, ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO, VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA, VEICULO_MULTAS, VEICULO_SINISTROS, LAUDOS_PREENCHIDOS) VALUES (@ID_TECNICO, @DATA, @AVALIADOR, @POSTURA_UNIFORME, @POSTURA_CRACHA, @POSTURA_BOTA, @POSTURA_MALA, @POSTURA_COMUNICACAO, @ASSIDUIDADE_ALMOX, @ASSIDUIDADE_BANCO, @ASSIDUIDADE_ROTA, @ASSIDUIDADE_ALMOCO, @ASSIDUIDADE_INICIO, @VEICULO_LIMPEZAINTERNA, @VEICULO_LIMPEZAEXTERNA, @VEICULO_ORGANIZACAOFRENTE, @VEICULO_ORGANIZACAOBAU, @VEICULO_RECARGA, @VEICULO_MULTAS, @VEICULO_SINISTROS, @LAUDOS_PREENCHIDOS)';
    
    pool.request()
      
      .input('ID_TECNICO', sql.Int, mappedRow.ID_TECNICO)
      .input('DATA', sql.Date, mappedRow.DATA)
      .input('AVALIADOR', sql.VarChar, mappedRow.AVALIADOR)
      .input('POSTURA_UNIFORME', sql.Bit, mappedRow.POSTURA_UNIFORME)
      .input('POSTURA_CRACHA', sql.Bit, mappedRow.POSTURA_CRACHA)
      .input('POSTURA_BOTA', sql.Bit, mappedRow.POSTURA_BOTA)
      .input('POSTURA_MALA', sql.Bit, mappedRow.POSTURA_MALA)
      .input('POSTURA_COMUNICACAO', sql.Bit, mappedRow.POSTURA_COMUNICACAO)
      .input('ASSIDUIDADE_ALMOX', sql.Bit, mappedRow.ASSIDUIDADE_ALMOX)
      .input('ASSIDUIDADE_BANCO', sql.Bit, mappedRow.ASSIDUIDADE_BANCO)
      .input('ASSIDUIDADE_ROTA', sql.Bit, mappedRow.ASSIDUIDADE_ROTA)
      .input('ASSIDUIDADE_ALMOCO', sql.Bit, mappedRow.ASSIDUIDADE_ALMOCO)
      .input('ASSIDUIDADE_INICIO', sql.Bit, mappedRow.ASSIDUIDADE_INICIO)
      .input('VEICULO_LIMPEZAINTERNA', sql.Bit, mappedRow.VEICULO_LIMPEZAINTERNA)
      .input('VEICULO_LIMPEZAEXTERNA', sql.Bit, mappedRow.VEICULO_LIMPEZAEXTERNA)
      .input('VEICULO_ORGANIZACAOFRENTE', sql.Bit, mappedRow.VEICULO_ORGANIZACAOFRENTE)
      .input('VEICULO_ORGANIZACAOBAU', sql.Bit, mappedRow.VEICULO_ORGANIZACAOBAU)
      .input('VEICULO_RECARGA', sql.Bit, mappedRow.VEICULO_RECARGA)
      .input('VEICULO_MULTAS', sql.Bit, mappedRow.VEICULO_MULTAS)
      .input('VEICULO_SINISTROS', sql.Bit, mappedRow.VEICULO_SINISTROS)
      .input('LAUDOS_PREENCHIDOS', sql.Bit, mappedRow.LAUDOS_PREENCHIDOS)
      
      

      
      .query(query)
      .catch((err) => {
        console.error('Erro ao inserir dados:', err);
      });
  });
});
    const results = sqlServer.dispatchQuery(sql, [])
    return results;
}
  

  
 
module.exports = {
    createUser
}