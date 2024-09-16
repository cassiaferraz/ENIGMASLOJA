const express = require('express');
const router = express.Router();
const LoginController = require('../controller/LoginController');
const authMiddleware = require('../middleware/authMiddleware');
 
router.post('/login', LoginController.login);
 
// Exemplo de rota protegida
router.get('/dados-protegidos', authMiddleware.authenticateToken, (req, res) => {
    res.json({ message: 'Dados protegidos' });
});
 
module.exports = router;