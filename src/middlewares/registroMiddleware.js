//REGISTRO VALIDATION
const { body } = require('express-validator')
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
