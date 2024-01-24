const express = require("express");
const router = express.Router();
const { body } = require('express-validator')

//USUARIO VALIDATION
const validarUsuario = [
    body('usuario')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isEmail()
        .withMessage('debe ser un Email'),
    body('password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({ min: 6 })
        .withMessage('Debe tener un minimo de 6 caracteres')
]

//REGISTRO VALIDATION
const validarRegistro = [
    body('nombre')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('apellido')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({ min: 6 }),
    body('email')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isEmail()
        .withMessage('Debe ser un E-mail valido'),
    body('fechaNac')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
]

const usersControllers = require("../controllers/usersControllers");

//LOGIN
router.get('/login', usersControllers.login)
router.post('/login', validarUsuario, usersControllers.processLogin)

//REGISTRO
router.get("/registro",usersControllers.registro);
router.post('/registro', validarRegistro, usersControllers.registroValidation)


module.exports = router;
