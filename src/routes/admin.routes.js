const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')
const adminControllers = require("../controllers/adminControllers");

//lugar donde almacenara las imagenes del formulario - MULTER
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve(__dirname, '../../public/img/avatars'))
    },
    filename:(req,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})
const upload = multer({storage});


//RUTAS

router.get("/admin", adminControllers.admin);

//http://localhost:4000/crearProducto
router.get("/crearProducto", adminControllers.crear);

router.post('/crearProducto', upload.single('imagenProducto'), adminControllers.store)

//http://localhost:4000/eliminarProducto
router.get("/eliminarProducto", adminControllers.eliminar);

router.post('/eliminarProducto', adminControllers.eliminar);

//http://localhost:4000/modificarProducto
router.get("/modificarProducto", adminControllers.modificar);

router.post('/modificarProducto', upload.single('imagenProducto'), adminControllers.modificar);

//Buscar
router.get("/buscarProducto", adminControllers.buscar);

router.post('/buscarProducto', adminControllers.buscar)





//EXPORTACION
module.exports = router;
