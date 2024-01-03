let productos = [
    {
        nombreProducto: "coca cola",
        descripcion: "mucho azucar",
        categoria: "gaseosa",
        precio: 750
    }
]

module.exports = {
    admin: (req, res) => {
        res.render('admin/admin')
    },
    create: (req, res) => {
        if (req.method === 'POST') {
            let nombreProducto = req.params.nombreProducto;
            let productosFiltrados = productos.filter(producto => producto.nombreProducto === nombreProducto);
    
            if (productosFiltrados.length > 0) {
                console.log("el producto se repite");
            } else {
                productos.push(req.body)
            }
            res.redirect('/crearProducto')
        } else {
            res.render('admin/crearProducto', { productos })
        }
    }
    }