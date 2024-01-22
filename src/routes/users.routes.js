const express = require("express");
const router = express.Router();
const multer = require('multer')
const { body } = require('express-validator')

const validarCrearProducto = [
    body('usuario')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isEmail()
        .withMessage('debe ser un Email'),
    body('password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({min : 6})
        .withMessage('Debe tener un minimo de 6 caracteres')
]

const usersControllers = require("../controllers/usersControllers");


router.get('/login', usersControllers.login)
router.post('/login', validarCrearProducto, usersControllers.processLogin)
router.get("/registro", usersControllers.registro);


module.exports = router;
