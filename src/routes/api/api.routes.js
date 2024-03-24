const express = require("express");
const router = express.Router();


const apiControllers = require('../../controllers/api/apiControllers');

router.get('/productos', apiControllers.list)

module.exports = router;