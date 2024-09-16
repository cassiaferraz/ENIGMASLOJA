// routes/resetPassword.js
const express = require('express');
const router = express.Router();
const { updateUserPassword } = require('../controller/UpdateController'); // Importe o controlador adequado

// Rota para redefinir a senha
router.post('/reset-password', updateUserPassword);

module.exports = router;