const express = require("express");
const router = express.Router();
const multer = require('multer')
const indexController = require("../controllers/mainControllers");

router.get("/", indexController.index);

module.exports = router;
