const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes.routes");

const path = require("path");
let port = 4000;

const carpetaPublic = path.resolve(__dirname, "./public");
app.use(express.static(carpetaPublic));

app.set("view engine", "ejs");
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
});
