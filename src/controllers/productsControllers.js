const path = require('path')
const fs = require('fs')
const db = require('../database/models')


module.exports = { 
  //PRODUCTOS
  index : (req,res)=>{
    db.Producto.findAll()
    .then((productos)=>{
      res.render('productos/index', {productos})
    })
  },
  detalle: async (req, res) => {
    try {
      const vistos = req.cookies.vistos || [];
      let promesaDetalle = db.Producto.findByPk(req.params.id);
      const promesaLista = db.Producto.findAll({
        where: {
            idproducto: vistos
        }
    });
  
      // Promise.all espera a que ambas promesas se resuelvan
      let [producto, productos] = await Promise.all([promesaDetalle, promesaLista]);
  
      res.render('productos/detalleProducto', { producto, productos});
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error interno del servidor');
    }
  },
  //CARRITO
  carrito : (req,res)=>{
    db.DetallePedido.findAll()
    .then((productos)=>{
      res.render('productos/carrito', {productos})
    })
  }
}

// const productsFilePath = path.join(__dirname, '../database/productosCarritoDB.json');
// let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// carrito: (req, res) => {
//   // Calcular la suma CANTIDAD
//   const sumaCantidad = productos.reduce((total, obj) => total + parseInt(obj.cantidad), 0);
  
//   // Calcular la suma PRECIO
//   const sumaPrecio = productos.reduce((total, obj) => total + (parseFloat(obj.precio) * parseFloat(obj.cantidad)), 0);
//   res.render("carrito", { productos, sumaCantidad, sumaPrecio });
// },
// contarProducto: (req, res) => {
//   let id = req.params.id;
//   let productoModificar = productos.find(p => p.id === id);
//   if (productoModificar) {
//     const { cantidad } = req.body;
//     const productoActualizado = {
//       ...productoModificar,
//       cantidad: parseFloat(cantidad)
//     };

//     const index = productos.findIndex(p => p.id === id);
    
//     productos[index] = productoActualizado;
    
//     fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));
//     res.redirect('/carrito')
//   }
  
// },
// eliminarProducto: (req, res) => {
//   const id = req.params.id
//   if (id) {
//     productos = productos.filter(producto => producto.id != id)
    
//     fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
//     res.redirect('/carrito')
    
//   } else {
//     res.send('el producto a eliminar ya no existe')
//   }
// }