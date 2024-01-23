const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator')

const usersPath = path.join(__dirname, '../database/users.json');
let usuarios = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const usersController = {
  registro: (req, res) => {
    res.render("registro");
  },
  registroValidation: (req, res) => {
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('registro', {
        errors: resultValidation.mapped(),
        old: req.body
      })

    } else {
      // Obtenemos los campos del body con destructuring
      const { nombre, apellido, usuario, password, email, fechaNac } = req.body
      // Creamos un nuevo producto con todos los campos 
      const newUsuario = {
        // id: Date.now(),
        id: uuidv4(),
        nombre,
        apellido,
        usuario,
        password,
        email,
        fechaNac
      }

      usuarios.push(newUsuario)

      let usuariosJSON = JSON.stringify(usuarios, null, '   ')

      fs.writeFileSync(usersPath, usuariosJSON)

      res.redirect('/')

    }

  }
  ,
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
    } else {
      res.render("usuario");
    }
  }
}
module.exports = usersController;
