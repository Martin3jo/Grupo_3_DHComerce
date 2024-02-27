/*EXPRESS/PATH/EJS*/
const express = require("express");
const app = express();
const path = require("path");

//SESSION de USUARIO
// const session = require('express-session')
// app.use(session({
//   secret: 'Mi secreto',
//   //POR LO VISTO ESTAN DEPRECADOS
//   resave: false,
//   saveUninitialized: false
// }));

//COOKIES
// const cookies = require('cookie-parser')
// app.use(cookies())

/*LLAMADO AL EJS*/
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'));

/*STATICS*/
const carpetaPublic = path.resolve(__dirname, "../public");
app.use(express.static(path.join(carpetaPublic)));

/*CAPTURADOR DE INFORMACION*/
/*Capturamos datos de un formulario en forma de objeto*/
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*MEJORA A LOS VERBOS HTTP: PUT - DELETE*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/*PUERTO*/
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
});

<<<<<<< HEAD
//MIDDLEWARES
=======
// //MIDDLEWARES
>>>>>>> 06e89671e7689b1aaa085b979299ebc95b4d6c45
// const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
// app.use(userLoggedMiddleware)

/*ROUTES*/
<<<<<<< HEAD
//const rutasIndex = require("./routes/main.routes");
// const rutasProductos = require("./routes/products.routes");
// const rutasUsuarios = require("./routes/users.routes");
const rutasAdmin = require("./routes/admin.routes");

/*ENTRY POINTS*/
//app.use("/", rutasIndex);
// app.use("/productos", rutasProductos);
// app.use("/usuarios", rutasUsuarios);
app.use("/admin", rutasAdmin);
=======
const rutasIndex = require("./routes/main.routes");
// const rutasProductos = require("./routes/products.routes");
// const rutasUsuarios = require("./routes/users.routes");
// const rutasAdmin = require("./routes/admin.routes");

/*ENTRY POINTS*/
app.use("/", rutasIndex);
// app.use("/", rutasProductos);
// app.use("/usuario", rutasUsuarios);
// app.use("/admin", rutasAdmin);
>>>>>>> 06e89671e7689b1aaa085b979299ebc95b4d6c45


/*RESPUESTA AL ERROR 404*/
app.use((req, res, next) => {
  res.status(404).render("404");
});
