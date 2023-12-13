const express = require("express");
const router = express.Router();
const indexController = require("../controllers/mainController");

router.get("/", indexController.index);

module.exports = router;
