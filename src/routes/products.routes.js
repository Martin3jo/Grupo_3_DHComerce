const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");

router.get("/", productsControllers.detalle_producto);
router.get("/", productsControllers.carrito);

module.exports = router;
