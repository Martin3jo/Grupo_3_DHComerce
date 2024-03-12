const express = require("express");
const router = express.Router();
const { body } = require('express-validator')


//middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

const registroMiddleware = [
    body('nombre')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('apellido')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('dni')
        .notEmpty()
        .withMessage('Campo Obligatorio'),
    body('req.body.celular')
        .isLength({ min: 10, max: 10 })
        .withMessage('Número de celular no válido'),
    body('req.body.password')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({ min: 6 }),
    body('req.body.password2')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isLength({ min: 6 }),
    body('req.body.email')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
        .isEmail()
        .withMessage('Debe ser un E-mail valido'),
    body('req.body.fechaNac')
        .notEmpty()
        .withMessage('Campo Obligatorio').bail()
]


const usersControllers = require("../controllers/usersControllers");

//REGISTRO
router.get("/registro", guestMiddleware, usersControllers.registro);
router.post('/registro', registroMiddleware, usersControllers.registroValidacion)

//LOGIN
router.get('/login', guestMiddleware, usersControllers.login)
router.post('/login'/*, loginMiddleware*/, usersControllers.loginValidacion)

// PERFIL DE USUARIO
router.get('/profile', authMiddleware, usersControllers.userProfile)

//LOGOUT
router.get('/logout', usersControllers.logout)


module.exports = router;
