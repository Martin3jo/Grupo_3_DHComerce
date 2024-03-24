const express = require("express");
const router = express.Router();


const apiProductosControllers = require('../../controllers/api/apiProductosControllers');

router.get('/', apiProductosControllers.list)

module.exports = router;