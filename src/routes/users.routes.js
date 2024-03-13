const express = require("express");
const router = express.Router();
const { body } = require('express-validator')

//middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

// Validacion usuario 
const validarUsuario = [
    body('email')
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

// Validación Registro
const validarRegistro = [
    body('nombre')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('apellido')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('dni')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('celular')
        .isLength({min : 10, max : 10})
        .withMessage('Número de celular no válido'),
    body('password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({ min: 6 }),
    body('password2')
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

//REGISTRO
router.get("/registro", guestMiddleware, usersControllers.registro);
router.post('/registro', validarRegistro, usersControllers.registroValidacion)

//LOGIN
router.get('/login', guestMiddleware, usersControllers.login)
router.post('/login', validarUsuario, usersControllers.loginValidacion)

// PERFIL DE USUARIO
router.get('/profile', authMiddleware, usersControllers.userProfile)

//LOGOUT
router.get('/logout', usersControllers.logout)


module.exports = router;
