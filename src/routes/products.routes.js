const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");
const productosVistos = require('../middlewares/productosVistos')

router.get('/',productsControllers.index)
router.get('/detalle/:id', productosVistos, productsControllers.detalle);

router.get("/carrito", productsControllers.carrito);
// router.put("/carrito/:id", productsControllers.contarProducto)
// router.delete('/carrito/:id', productsControllers.eliminarProducto)


module.exports = router;
