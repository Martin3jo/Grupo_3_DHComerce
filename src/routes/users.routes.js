const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router.get("/usuario", usersControllers.usuario);
router.get("/registro", usersControllers.registro);

module.exports = router;
