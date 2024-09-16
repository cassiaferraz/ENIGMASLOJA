const bodyParser = require('body-parser')

const indicadoresModel = require('../models/indicadoresModel');

const getUserindicadores = async (req, res) => {
  try {
    const id = req.params.id;
    const indicadoresData = await indicadoresModel.getUser(id)
    res.status(200).json(indicadoresData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};

module.exports = {
    getUserindicadores
}

