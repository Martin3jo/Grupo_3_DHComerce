<<<<<<< HEAD
const db = require('../database/models')
const indexController = {
  index: (req, res) => {
    db.Producto.findAll()
    .then(producto=>{
      res.render("index", {producto});
=======
let db = require('../database/models')

const indexController = {
  index: (req, res) => {
    db.Cliente.findAll()
    .then(resultado=>{
      res.render("index", {resultado});

>>>>>>> 06e89671e7689b1aaa085b979299ebc95b4d6c45
    })
  },
};
module.exports = indexController;
