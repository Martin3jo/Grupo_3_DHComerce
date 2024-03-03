const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    try {
        // Verifica si req.body.email está definido y no es null
        if (req.body && req.body.email) {
            const userFromDB = await db.Cliente.findOne({
                where: {
                    email: req.body.email
                }
            });

            // Verifica si el usuario existe en la base de datos
            if (userFromDB) {
                req.session.userLogged = userFromDB;
            }
        }

        if (req.session && req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    } catch (error) {
        console.error("Error al verificar el usuario:", error);
    }

    next();
}

module.exports = userLoggedMiddleware;