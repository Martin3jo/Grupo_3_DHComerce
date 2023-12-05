const controller = {
  index: (req, res) => {
    res.render("index");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  detalle_producto: (req, res) => {
    res.render("detalle_producto");
  },
  registro: (req, res) => {
    res.render("registro");
  },
  usuario: (req, res) => {
    res.render("usuario");
  },
};

module.exports = controller;
