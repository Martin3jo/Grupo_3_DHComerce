const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { log } = require('console');
var upload = multer().single('avatarFile')
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



//admin
let admin = (req, res) => {
    res.render('admin/admin', { productos })
}

//crear
let store = (req, res) => {
    //validacion
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        return res.render('admin/crearProducto', {
            errors: resultValidation.mapped(),
            old: req.body
        })

    } else {
        // Obtenemos los campos del body con destructuring
        const { nombreProducto, descripcion, imagenProducto, categoria, precio } = req.body
        // Creamos un nuevo producto con todos los campos 
        const newProduct = {
            // id: Date.now(),
            id: uuidv4(),
            nombreProducto,
            descripcion,
            imagenProducto: req.file?.filename || 'default-image.png',
            /*imagenProducto: (req.file && req.file.filename) ? imagenProducto = req.file.filename :
                imagenProducto = 'default-image.png', */
            categoria,
            precio
        }

        productos.push(newProduct)

        let productsJSON = JSON.stringify(productos, null, '   ')

        fs.writeFileSync(productsFilePath, productsJSON)

        res.redirect('/admin')
        
    }

}
let crear = (req, res) => {
    res.render('admin/crearProducto')
}

//eliminar
let eliminar = (req, res) => {
    const id = req.params.id
    if (id) {
        productos = productos.filter(producto => producto.id != id)
    
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
        res.redirect('/admin')
        
    }else{
        res.send('el producto a eliminar ya no existe')
    }
}

//modificar
let modificar = (req, res) => {
    let id = req.params.id;
    let productoModificar = productos.find(p => p.id === id);
    if (productoModificar) {
        const { nombreProducto, descripcion, imagenProducto, categoria, precio } = req.body;
        const productoActualizado = {
            id: id,
            nombreProducto: nombreProducto || productoModificar.nombreProducto,
            descripcion: descripcion || productoModificar.descripcion,
            imagenProducto: imagenProducto || productoModificar.imagenProducto,
            categoria: categoria || productoModificar.categoria,
            precio: precio || productoModificar.precio
        };

        const index = productos.findIndex(p => p.id === id);

        productos[index] = productoActualizado;

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));

        res.render('admin/modificarProducto', { productoActualizado });
    }
    else{res.send('no se encuentra el producto solicitado')}
}

//Buscar
let buscar = (req, res) => {
    let queryBusqueda = req.query.buscar
    let busquedaResultante = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombreProducto.includes(queryBusqueda)) {
            busquedaResultante.push(productos[i])
        }
    }
    res.render('admin/admin', { busquedaResultante })
}

module.exports = {
    admin,
    crear,
    store,
    eliminar,
    modificar,
    buscar
}