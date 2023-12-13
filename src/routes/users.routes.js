const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router.get("/", usersControllers.usuario);
router.get("/", usersControllers.registro);

module.exports = router;
