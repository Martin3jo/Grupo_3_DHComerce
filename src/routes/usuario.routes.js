const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const registroController = require("../controllers/registroController");

router.get('/',usuarioController.usuario)
router.get('/',registroController.registro)

module.exports = router;