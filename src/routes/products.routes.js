const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers");


router.get('/detalleProducto', productsControllers.detalleProducto);

router.get("/carrito", productsControllers.carrito);
<<<<<<< HEAD
router.get("/carrito/:id", productsControllers.contarProducto)

=======
router.put("/carrito/:id", productsControllers.contarProducto)
router.delete('/carrito/:id', productsControllers.eliminarProducto)
>>>>>>> carrito


module.exports = router;
