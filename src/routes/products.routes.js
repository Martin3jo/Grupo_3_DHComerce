const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");

router.get("/detalle_producto", productsControllers.detalle_producto);
router.get("/carrito", productsControllers.carrito);
router.get("/crearProducto", productsControllers.crearProducto);

module.exports = router;
