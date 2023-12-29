const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsControllers = require("../controllers/productsControllers");

/* ALMACENAMIENTO MULTER*/
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img/create')
        cb(null, folder);
    },
    filename: (req, file, callback) => {
        let imageName ='imagenProducto-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
});
let fileUpload = multer({storage });


router.get('/detalle_producto/:id', productsControllers.detail);

router.get("/carrito", productsControllers.carrito);

router.get("/crearProducto", productsControllers.create);

router.post("/crearProducto", fileUpload.single('imagenProducto'), productsControllers.create);

router.get('/search', productsControllers.search)

module.exports = router;
