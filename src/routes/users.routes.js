const express = require("express");
const router = express.Router();
const multer = require('multer')
const { body } = require('express-validator')

const validarCrearProducto = [
    body('usuario')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail(),
    body('password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({min : 6})
        .withMessage('Debe tener un minimo de 6 caracteres')
]

const usersControllers = require("../controllers/usersControllers");


router.get('/login', usersControllers.login)
router.get('/login', validarCrearProducto, usersControllers.processLogin)
router.get("/registro", usersControllers.registro);


module.exports = router;
