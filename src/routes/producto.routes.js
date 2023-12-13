const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController");
const detalle_productoController = require("../controllers/detalle_productoController");

router.get("/", detalle_productoController.detalle_producto);
router.get("/", carritoController.carrito);

module.exports = router;
