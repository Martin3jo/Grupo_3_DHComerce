const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/registro", mainController.registro);
router.get("/carrito", mainController.carrito);
router.get("/detalle_producto", mainController.detalle_producto);
router.get("/usuario", mainController.usuario);

module.exports = router;
