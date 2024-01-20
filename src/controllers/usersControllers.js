const { validationResult } = require('express-validator')

const usersController = {
  registro: (req, res) => {
    res.render("registro");
  },
  login: (req, res) => {
    res.render("usuario");
  },
  processLogin: (req, res) => {
    //validacion
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('usuario', {
        errors: resultValidation.mapped(),
        old: req.body
      })
    }else{
      res.render("usuario");
    }
  }
}
module.exports = usersController;
