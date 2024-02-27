const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { body } = require('express-validator')


//validaciones
const validarCrearProducto = [
    body('marca').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('categoria').notEmpty().withMessage('Debes seleccionar la categoria'),
    body('precio').notEmpty().toFloat().withMessage('Debes completar el campo de precio'),
    /* LUEGO VER VALIDACION IMAGEN
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('debes subir una imagen')
        }
    })
    */
]


//direcciones de RUTAS
const adminControllers = require("../controllers/adminControllers");


//lugar donde almacenara las imagenes del formulario - MULTER
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/img/avatars'))
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})
const upload = multer({ storage });


//RUTAS
http://localhost:4000/admin
router.get('/',adminControllers.admin)

http://localhost:4000/admin/productos
router.get("/productos", adminControllers.adminProductos);


// //CRUD
//http://localhost:4000/admin/crearProducto
router.get("/crearProducto", adminControllers.crear);
router.post('/crearProducto', upload.single('avatar'), validarCrearProducto, adminControllers.store)

// //http://localhost:4000/admin/buscarProducto
// router.get("/productos/buscar", adminControllers.buscar);



//http://localhost:4000/admin/modificarProducto/:id
router.get("/modificarProducto/:id", adminControllers.modificar);

// router.put('/:id/modificarProducto', upload.single('imagenProducto'), validarCrearProducto, adminControllers.modificar);

// //http://localhost:4000/admin/:id

// router.delete('/productos/:id', adminControllers.eliminar);


// //ADMIN TAREAS

// router.get('/pedidos', adminControllers.adminPedidos);
// router.post('/pedidos', adminControllers.adminPedidosPost);

//EXPORTACION
module.exports = router;
