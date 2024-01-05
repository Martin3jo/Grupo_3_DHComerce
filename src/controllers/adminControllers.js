const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



//admin
let admin = (req, res) => {
    res.render('admin/admin')
}

//crear
let crear = (req, res) => {
    if (req.method === 'POST') {
        let nombreProducto = req.params.nombreProducto;
        let productosFiltrados = productos.filter(producto => producto.nombreProducto === nombreProducto);

        if (productosFiltrados.length > 0) {
            console.log("el producto se repite");
        } else {
            productos.push(req.body)
        }
        res.redirect('/crearProducto')
    } else {
        res.render('admin/crearProducto', { productos })
    }
}

//eliminar
let eliminar = (req,res)=>{
    res.render('admin/eliminarProducto')
}

//modificar
let modificar = (req,res)=>{
    res.render('admin/modificarProducto')
}

//Buscar
let buscar = (req,res)=>{
    res.render('admin/buscarProducto')
}

module.exports = {
    admin: admin,
    crear: crear,
    eliminar : eliminar,
    modificar : modificar,
    buscar : buscar,
    }