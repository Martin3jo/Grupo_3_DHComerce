const express = require("express");
const router = express.Router();
const multer = require('multer')
const adminControllers = require("../controllers/adminControllers");

router.get("/admin", adminControllers.admin);

router.get("/crearProducto", adminControllers.create);

router.post('/crearProducto/:id', adminControllers.create)

module.exports = router;
