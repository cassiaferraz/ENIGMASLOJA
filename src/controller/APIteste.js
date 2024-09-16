const bodyParser = require('body-parser')
const habilidadesModel = require('../models/habilidadesModel');
 
 
 
 
const getUserHab = async (req, res) => {
  try {
    const id = req.params.id;
    const HabData = await habilidadesModel.getUser(id)
    res.status(200).json(HabData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};
 
module.exports = {
    getUserHab
}