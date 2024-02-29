const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
let db = require('../database/models')
const { Op } = require("sequelize");

//BASE DE DATOS PRODUCTOS
// const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
// let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//BASE DE DATOS PEDIDOS
// const pedidosFilePath = path.join(__dirname, '../database/pedidosDB.json')
// let pedidos = JSON.parse(fs.readFileSync(pedidosFilePath, 'utf-8'))



// ADMIN TAREAS
// let adminProductos = 
// let adminPedidos = (req,res) =>{
//     res.render('admin/adminPedidos', {pedidos})
// }
// let adminPedidosPost = (req,res) => {
//     res.send('hola')
// }

//crear
// let 
// let crear = 

//eliminar
// let eliminar = (req, res) => {
//     const id = req.params.id
//     if (id) {
//         productos = productos.filter(producto => producto.id != id)

//         fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, '   '))
//         return res.render('admin/adminProductos', { productos })

//     } else {
//         return res.send('el producto a eliminar ya no existe')
//     }
// }

//modificar
// let modificar = (req, res) => {
//     let id = req.params.id;
//     let productoModificar = productos.find(p => p.id === id);
//     if (productoModificar) {
//         const { nombreProducto, descripcion, imagenProducto, categoria, precio } = req.body;
//         const productoActualizado = {
//             id: id,
//             nombreProducto: nombreProducto || productoModificar.nombreProducto,
//             descripcion: descripcion || productoModificar.descripcion,
//             imagenProducto: imagenProducto || productoModificar.imagenProducto,
//             categoria: categoria || productoModificar.categoria,
//             precio: precio || productoModificar.precio
//         };

//         const index = productos.findIndex(p => p.id === id);

//         productos[index] = productoActualizado;

//         fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));

//         res.render('admin/modificarProducto', { productoActualizado });
//     }
//     else { res.send('no se encuentra el producto solicitado') }
// }

//Buscar
// let buscar = (req, res) => {
//     let queryBusqueda = req.query.buscar.toLowerCase();
//     let busquedaResultante = [];
//     for (let i = 0; i < productos.length; i++) {
//         if (productos[i].nombreProducto.toLowerCase().includes(queryBusqueda)) {
//             busquedaResultante.push(productos[i])
//         }
//     }
//     res.render('admin/adminProductos', { productos: busquedaResultante })
// }

module.exports = {
    admin: (req, res) => {
        res.render('admin/admin')
    },
    adminProductos: async (req, res) => {
        const productos = await db.Producto.findAll()
        return res.render('admin/adminProductos', { productos });
    },
    crear: (req, res) => {
        res.render('admin/crearProducto')
    },
    store: (req, res) => {
        //validacion
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('admin/crearProducto', {
                errors: resultValidation.mapped(),
                old: req.body
            })

        } else {
            let { marca, descripcion, volumen, categoria, disponibilidad, precio, avatar } = req.body
            db.Producto.create({
                marca,
                descripcion,
                volumen,
                categoria,
                disponibilidad,
                precio,
                avatar : req.file.filename
            })
                .then(() => {
                    res.redirect('/admin/productos')
                })
                .catch(error => console.log(error.message))
        }
    },
    modificar:async function (req, res) {
        try {
            let idproducto = req.params.id
            let Producto = await db.Producto.findByPk(idproducto)
            res.render('admin/modificarProducto', { productos : Producto })
        } catch (error) {
            console.log(error.message);
        }
    },
    modificarProceso:async function (req, res) {
        try {
            const { marca, descripcion, volumen, categoria, disponibilidad,precio, avatar } = req.body
            await db.Producto.update({
                marca,
                descripcion,
                volumen,
                categoria,
                disponibilidad,
                precio,
                avatar : req.file.filename
            }, {
                where: { idproducto: req.params.id }
            })
            res.redirect('/admin/productos')
        } catch (error) {
            console.log(error.message);
        }
    },
    eliminar : async function (req, res) {
        try {
            await db.Producto.destroy({
                where: { idproducto: req.params.id }
            })
            res.redirect('/admin/productos')
        } catch (error) {
            console.log(error.message);
        }
    },
    buscar : async (req, res) => {
        try {
            const { buscar } = req.query;
            const producto = await db.Producto.findAll({
                where: {
                    marca: {
                        [Op.like]: `%${buscar}%`
                    }
                }
            });
            res.render('admin/adminProductos', { productos : producto });
        } catch (error) {
            console.log(error.message);
            res.send(error.message);
        }
    },
}