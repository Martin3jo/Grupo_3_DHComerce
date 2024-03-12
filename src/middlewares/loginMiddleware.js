//USUARIO VALIDATION
const { body } = require('express-validator')
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