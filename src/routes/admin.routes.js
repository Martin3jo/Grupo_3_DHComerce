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

//http://localhost:4000/admin
router.get("/", adminControllers.admin);

//http://localhost:4000/admin/buscarProducto
router.get("/buscarProducto", adminControllers.buscar);

//http://localhost:4000/admin/crearProducto
router.get("/crearProducto", adminControllers.crear);

router.post('/crearProducto', upload.single('imagenProducto'), adminControllers.store)

//http://localhost:4000/admin/modificarProducto
router.get("/:id/modificarProducto", adminControllers.modificar);

router.put('/:id/modificarProducto', upload.single('imagenProducto'), adminControllers.modificar);

//http://localhost:4000/admin/eliminarProducto
router.get("/:id", adminControllers.eliminar);

router.delete('/:id', adminControllers.eliminar);




//EXPORTACION
module.exports = router;
