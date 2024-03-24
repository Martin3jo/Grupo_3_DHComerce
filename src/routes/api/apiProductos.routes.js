const express = require("express");
const router = express.Router();


const apiProductosControllers = require('../../controllers/api/apiProductosControllers');

router.get('/', apiProductosControllers.list)
router.get('/detalle/:id', apiProductosControllers.detalle)

module.exports = router;