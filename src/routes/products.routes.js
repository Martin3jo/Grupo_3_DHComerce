const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");


router.get('/detalleProducto', productsControllers.detalleProducto);

router.get("/carrito", productsControllers.carrito);



module.exports = router;
