const sqlServer = require('../utils/sqlServer');


function createUser() {
    const sql = "INSERT INTO dbo.Tecnico (col1, col2) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function getUser(id) {
    const sql = `SELECT NIVEL, XP, MOEDAS FROM dbo.Tecnico WHERE ID_TECNICO = 40413278 `;
    const results = sqlServer.dispatchQuery(sql, [id])
    return results;
}   

function updateUser(ide) {
    const sql = 'UPDATE SET * FROM dbo.Tecnico WHERE ID_TECNICO = 40413278';
    const results = sqlServer.dispatchQuery(sql, [ide]);
    return results;

}   

function deleteUser() {
    const sql = "DELETE FROM dbo.Tecnico WHERE ID_TECNICO";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

/*
    C
    R
    U
    D
*/


module.exports = {
    createUser,
    updateUser,
    getUser,
    deleteUser

}