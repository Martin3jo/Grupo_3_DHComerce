const express = require("express");
const router = express.Router();


//middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const loginMiddleware = require('../middlewares/loginMiddleware')
const registroMiddleware = require('../middlewares/registroMiddleware')


const usersControllers = require("../controllers/usersControllers");

//REGISTRO
router.get("/registro", guestMiddleware, usersControllers.registro);
router.post('/registro'/*, registroMiddleware*/, usersControllers.registroValidacion)

//LOGIN
router.get('/login', guestMiddleware, usersControllers.login)
router.post('/login'/*, loginMiddleware*/, usersControllers.loginValidacion)

// PERFIL DE USUARIO
router.get('/profile', authMiddleware, usersControllers.userProfile)

//LOGOUT
router.get('/logout', usersControllers.logout)


module.exports = router;
