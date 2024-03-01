const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    //USO COOKIE PARA AUTOINICIO SESION
    let emailInCookie = req.cookies.userEmail
    db.Cliente.findOne({
        where: {
            email: req.body.email
        }
    })
        .then((userFromCookie) => {
            if (userFromCookie) {
                req.session.userLogged = userFromCookie
            }

        })
        .then(()=>{
            if (req.session && req.session.userLogged) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged
            }

        })


    next();
}
module.exports = userLoggedMiddleware