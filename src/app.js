/*EXPRESS/PATH/EJS*/
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");

/*STATICS*/
const carpetaPublic = path.resolve(__dirname, "../public");
app.use(express.static(carpetaPublic));

/*PUERTO*/
let port = 4000;
app.listen(port, () => {
  console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
});

/*ROUTES*/
const rutasIndex = require("./routes/index.routes");
const rutasCarrito = require("./routes/carrito.routes");
const rutasDetalleProducto = require("./routes/detalle_producto.routes");
const rutasRegistro = require("./routes/registro.routes");
const rutasUsuario = require("./routes/usuario.routes");


/*ENTRY POINTS*/
app.use('/', rutasIndex);
app.use('/carrito', rutasCarrito);
app.use('/detalle_producto',rutasDetalleProducto);
app.use('/registro', rutasRegistro);
app.use('/usuario', rutasUsuario);

