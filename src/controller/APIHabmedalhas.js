const bodyParser = require('body-parser')

const habilidadesModel = require('../models/habilidadesModel');
const medalhasModel = require('../models/medalhasModel')

const getUserHabmedalhas = async (req, res) => {
  try {
    const id = req.params.id;
    const habData = await habilidadesModel.getUser(id)
    const medalhaData = await medalhasModel.getUser(id)

    const habmedalhaData = {
      hab: habData,
      medalhas: medalhaData
    }

    res.status(200).json(habmedalhaData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};

module.exports = {
    getUserHabmedalhas
}