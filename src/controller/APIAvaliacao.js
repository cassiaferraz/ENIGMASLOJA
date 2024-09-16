const bodyParser = require('body-parser')

const avaliacaoModel = require('../models/avaliacaoModel');

const getUserAvaliations = async (req, res) => {
  try {
    const id = req.params.id;
    const avaliacaoData = await avaliacaoModel.getUser(id)
    res.status(200).json(avaliacaoData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};

module.exports = {
    getUserAvaliations
}