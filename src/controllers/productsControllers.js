const productsControllers = {
  detalle_producto: (req, res) => {
    res.render("detalle_producto");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  detail: (req, res) => {
    console.log(req.params); //probamos por consola lo que viene por parametro
    let productoEncontrado = productos.find(producto => {
      return producto.id == req.params.id
    })
    if (productoEncontrado) {
      res.render('detail.ejs', { producto: productoEncontrado })
    }
    res.send('El producto que buscas no existe')
  },
  create: (req, res) => {
    res.render('admin/crearProducto.ejs')
  },
  search: (req, res) => {
    console.log(req.query); //probamos por consola lo llega por el metodo get en un formulario
    let productosEncontrados = productos.filter(producto => {
      return producto.nombre == req.query.nombre
    })
    res.render('home.ejs', { productos: productosEncontrados, admin: true })
  }
};
module.exports = productsControllers;
