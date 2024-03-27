const express = require("express");
const router = express.Router();


const apiCategoriasControllers = require('../../controllers/api/apiCategoriasControllers');

router.get('/', apiCategoriasControllers.total)

module.exports = router;