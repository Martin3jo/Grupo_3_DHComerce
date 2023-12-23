const productsControllers = {
  detalle_producto: (req, res) => {
    res.render("detalle_producto");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  crearProducto: (req,res)=>{
    res.render("crearProducto")
  }
};
module.exports = productsControllers;
