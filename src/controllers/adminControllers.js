const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
var upload = multer().single('avatarFile')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



//admin
let admin = (req, res) => {
    res.render('admin/admin')
}

//crear
let store = (req, res) => {
    // Obtenemos los campos del body con destructuring
    const {nombreProducto, descripcion, imagenProducto, categoria, precio} = req.body
    // Creamos un nuevo producto con todos los campos 
    const newProduct = {
        // id: Date.now(),
        id: uuidv4(),
        nombreProducto: nombreProducto,
        //name: req.body.name,
        descripcion: descripcion,
        imagenProducto: req.file?.filename || 'default-image.png',
        categoria: categoria,
        precio: precio,
    }
    // Agregamos ese producto nuevo al listado
    productos.push(newProduct)
    //  Convertimos en json el listado
    let productsJSON = JSON.stringify(productos, null, ' ')
    // Sobreescribimos json con el nuevo listado
    fs.writeFileSync(productsFilePath, productsJSON)
    // redireccionamos
    res.redirect('/crearProducto')

    //atrapamos errores
    upload(req, res, (err) => {
        if(err) {
        res.status(400).send("Algo salió mal!");
        }
        res.send(req.file);
        });
}
let crear = (req,res) => {
    res.render('admin/crearProducto', {productos})
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
    crear : crear,
    store: store,
    eliminar : eliminar,
    modificar : modificar,
    buscar : buscar,
    }