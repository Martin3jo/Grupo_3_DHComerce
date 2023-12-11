const express = require("express");
const router = express.Router();
const detalle_productoController = require("../controllers/detalle_productoController");

router.get('/',detalle_productoController.detalle_producto)

module.exports = router;