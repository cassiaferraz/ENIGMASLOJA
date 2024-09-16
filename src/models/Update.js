const sqlServer = require('../utils/sqlServer');
 
// UPDATE
function updateUser(userEmail, userPassword) {
    const sql = `UPDATE dbo.COLABORADORES SET SENHA = '${userPassword}' WHERE EMAIL = '${userEmail}'`;
    const results = sqlServer.dispatchQuery(sql);
    return results;
}
 
module.exports = {
    updateUser
}