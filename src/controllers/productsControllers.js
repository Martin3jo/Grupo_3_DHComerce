const path = require('path')
const fs = require('fs')
const Productos = require('../models/Productos')

const productsFilePath = path.join(__dirname, '../database/productosCarritoDB.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
  detalleProducto: (req, res) => {
    res.render("detalleProducto");
  },
  carrito: (req, res) => {
    res.render("carrito", {productos});
  },
  contarProducto : (req,res)=>{
    let id = req.params.id
    let cantidad = req.body.cantidad
    console.log(cantidad)
    res.redirect('/carrito')
  }
};
