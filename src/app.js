/*EXPRESS/PATH/EJS*/
const express = require("express");
const app = express();
const path = require("path");

/*LLAMADO AL EJS*/
app.set("view engine", "ejs");

/*STATICS*/
const carpetaPublic = path.resolve(__dirname, "../public");
app.use(express.static(carpetaPublic));

/*CAPTURADOR DE INFORMACION*/
/*Capturamos datos de un formulario en forma de objeto*/
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*MEJORA A LOS VERBOS HTTP: PUT - DELETE*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/*PUERTO*/
let port = 4000;
app.listen(port, () => {
  console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
});

/*ROUTES*/
const rutasIndex = require("./routes/main.routes");
const rutasProductos = require("./routes/products.routes");
const rutasUsuarios = require("./routes/users.routes");

/*ENTRY POINTS*/
app.use("/", rutasIndex);
app.use("/", rutasProductos);
app.use("/", rutasUsuarios);

/*RESPUESTA AL ERROR 404*/
app.use((req,res,next)=>{
  res.status(404).render("No-Encontrado")
})