const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

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
      let userInDB = User.findByField('email', req.body.email)

      if (userInDB) {
        return res.render('registro', {
          errors: {
            email: {
              msg: 'Este Email ya existe'
            }
          },
          old: req.body
        })
      }
      // Obtenemos los campos del body con destructuring
      const { nombre, apellido, usuario, password, email, fechaNac } = req.body
      // Creamos un nuevo producto con todos los campos 
      const newUsuario = {
        // id: Date.now(),
        id: uuidv4(),
        nombre,
        apellido,
        usuario,
        password: bcrypt.hashSync(password, 10),
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
    console.log(req.session)
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
      //COMPARO EMAIL
      let userToLogin = User.findByField('email', req.body.email)
      if (userToLogin) {
        //COMPARO PASSWORD
        let verificarPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
        if (verificarPassword) {
          //GUARDO USUARIO EN SESSION
          delete userToLogin.password
          req.session.userLogged = userToLogin
          res.redirect('/')
        }else{
          return res.render('usuario', {
            errors: {
              email : {
                msg : 'Datos Erroneos'
              }
            },
            old: req.body
          });
        }
      }
      return res.render('usuario', {
        errors: {
          email : {
            msg : 'Datos Erroneos'
          }
        },
        old: req.body
      });
    }
  },
  userProfile : (req,res)=>{
    res.render('userProfile')
  },
  logout : (req,res)=>{
    req.session.destroy()
    return res.redirect('/')
  }
}
module.exports = usersController;
