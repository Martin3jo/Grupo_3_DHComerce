const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../database/models')

const usersController = {
  registro: (req, res) => {
    res.render("usuario/registro");
  },
  registroValidacion: (req, res) => {
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('usuario/registro', {
        errors: resultValidation.mapped(),
        old: req.body
      })
    } else {
      db.Cliente.findOne({
        where: {
          email: req.body.email,
          dni: req.body.dni
        }
      })
        .then((cliente) => {

          if (cliente) {
            return res.render('usuario/registro', {
              errors: {
                email: {
                  msg: 'Este Email ya existe'
                },
                dni: {
                  msg: 'Este D.N.I. ya existe'
                }
              },
              old: req.body
            })
          }else{
            const { nombre, apellido, dni, celular, direccion, email, password, fecha_nac } = req.body;
            db.Cliente.create({
              nombre : nombre + ', ' + apellido,
              dni,
              celular,
              direccion,
              email,
              password: bcrypt.hashSync(password, 10),
              fecha_nac
            })
          .then(() => {
            res.redirect('/');
          })
          .catch((error) => {
            // Manejar errores al guardar en la base de datos
            console.error(error);
            res.redirect('/');
          });
      }})
    }
  },
  login : (req,res)=>{
    res.render('usuario/usuario')
  },
  loginValidacion : (req,res)=>{
    //validacion
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        return res.render('usuario/usuarui', {
            errors: resultValidation.mapped(),
            old: req.body
          })
        } else {
            //COMPARO EMAIL
            db.Cliente.findOne({
              where: {
                  email: req.body.email
              }
          })
          .then((userToLogin)=>{
            if (userToLogin) {
                //COMPARO PASSWORD
      let verificarPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
      if (verificarPassword) {
          //GUARDO USUARIO EN SESSION
          delete userToLogin.password
          req.session.userLogged = userToLogin
          if (req.body.rememberUser) {
              res.cookie('userEmail', req.body.email, {maxAge : (1000 * 60) * 2})
            }
            return res.redirect('/')
          }else{
              return res.render('usuario/usuario', {
                  errors: {
                      email : {
                          msg : 'Datos Erroneos'
                        }
                      },
                      old: req.body
                    });
                  }
                }
                return res.render('usuario/usuario', {
                    errors: {
                        email : {
                            msg : 'Datos Erroneos'
                          }
                        },
                        old: req.body
                      });
                    })
                  }
  }
}
module.exports = usersController;
// ,
// login: (req, res) => {
  //   res.render("usuario");
  // },
  // processLogin: (req, res) => {
                    // userProfile : (req,res)=>{
  //   res.render('userProfile')
  // },
  // logout : (req,res)=>{
    //   res.clearCookie('userEmail')
    //   req.session.destroy()
    //   return res.redirect('/')
    // }
    
    // const { v4: uuidv4 } = require('uuid');
    // const User = require('../models/User')
    // const usersPath = path.join(__dirname, '../database/users.json');
    // let usuarios = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    
    
    // // Obtenemos los campos del body con destructuring
    // const { nombre, apellido, usuario, password, email, fechaNac } = req.body
    // // Creamos un nuevo producto con todos los campos 
    // const newUsuario = {
    //   // id: Date.now(),
    //   id: uuidv4(),
    //   nombre,
    //   apellido,
    //   usuario,
    //   password: bcrypt.hashSync(password, 10),
    //   email,
    //   fechaNac
    // }
    // usuarios.push(newUsuario)
    // let usuariosJSON = JSON.stringify(usuarios, null, '   ')
    // fs.writeFileSync(usersPath, usuariosJSON)
    // res.redirect('/')