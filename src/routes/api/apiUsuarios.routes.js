const express = require("express");
const router = express.Router();


const apiUsuariosControllers = require('../../controllers/api/apiUsuariosControllers');

router.get('/', apiUsuariosControllers.list)
router.get('/detalle/:id', apiUsuariosControllers.detalle)

module.exports = router;