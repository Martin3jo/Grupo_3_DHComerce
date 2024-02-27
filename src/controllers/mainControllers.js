const db = require('../database/models')
const indexController = {
  index: (req, res) => {
    db.Producto.findAll()
    .then(producto=>{
      res.render("index", {producto});
    })
  },
};
module.exports = indexController;
