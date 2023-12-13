/*EXPRESS/PATH/EJS*/
const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));

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
const rutasIndex = require("./routes/main.routes");
const rutasProductos = require("./routes/products.routes");
const rutasUsuarios = require("./routes/users.routes");

/*ENTRY POINTS*/
app.use("/", rutasIndex);
app.use("/carrito", rutasProductos);
app.use("/detalle_producto", rutasProductos);
app.use("/registro", rutasUsuarios);
app.use("/usuario", rutasUsuarios);
