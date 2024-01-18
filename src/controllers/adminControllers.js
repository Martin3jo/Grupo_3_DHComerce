const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { log } = require('console');
var upload = multer().single('avatarFile')

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



//admin
let admin = (req, res) => {
    res.render('admin/admin', { productos })
}

//crear
let store = (req, res) => {
    // Obtenemos los campos del body con destructuring
    const { nombreProducto, descripcion, imagenProducto, categoria, precio } = req.body
    // Creamos un nuevo producto con todos los campos 
    const newProduct = {
        // id: Date.now(),
        id: uuidv4(),
        nombreProducto: nombreProducto,
        descripcion: descripcion,
        imagenProducto: req.file?.filename || 'default-image.png',
        categoria: categoria,
        precio: precio
    }
    // Agregamos ese producto nuevo al listado
    productos.push(newProduct)
    //  Convertimos en json el listado
    let productsJSON = JSON.stringify(productos, null, '   ')
    // Sobreescribimos json con el nuevo listado
    fs.writeFileSync(productsFilePath, productsJSON)
    // redireccionamos
    res.redirect('/admin/crearProducto')

    //atrapamos errores
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Algo salió mal!");
        }
        res.send(req.file);
    });
}
let crear = (req, res) => {
    res.render('admin/crearProducto')
}

//eliminar
let eliminar = (req, res) => {
		const id = req.params.id
		// Buscar el producto a eliminar
		productos = productos.filter(producto => producto.id != id)
		// Eliminar la imagen si es que no es una por defecto
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null,  ' '))
		res.redirect('/admin')
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

        // Encontrar el índice del producto en el arreglo
        const index = productos.findIndex(p => p.id === id);

        // Reemplazar el objeto del producto existente en la posición del índice con el objeto actualizado
        productos[index] = productoActualizado;

        // Escribir el arreglo completo de productos en el archivo
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));

        // Respondemos con una vista renderizada que muestra los datos del producto actualizado
        res.render('admin/modificarProducto', { productoActualizado });
    }
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
    admin: admin,
    crear: crear,
    store: store,
    eliminar: eliminar,
    modificar: modificar,
    buscar: buscar,
}