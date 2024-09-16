const bcrypt = require('bcryptjs');
const updateUser = require('../models/update.js');
 
 
const updateUserPassword = async (req, res) => {
   
    try {
        const userEmail = req.body.email
        const userPassword = req.body.password;
        const saltRounds = 10;      
 
        bcrypt.hash(userPassword, saltRounds, (err, hash) => {
            if (err) console.log(err);
 
            updateUser.updateUser(userEmail, hash);
           
            console.log("\n-> Atualização DE Senha:");
            console.log("EMAIL: ", userPassword);
            console.log("HASH: ", hash);
 
            res.status(201).json({message: 'Usuário criado'});
        });
 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao atualizar a senha no banco de dados.' });
    }
}
 
module.exports = { updateUserPassword };
 