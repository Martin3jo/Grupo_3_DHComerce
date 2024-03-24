const db = require('../../database/models');
const sequelize = db.sequelize;

const apiControllers = {
    'list': (req, res) => {
        db.Producto.findAll(
            {
                include: ["Categoria"],
                attributes: {
                    include: [
                        [
                            sequelize.literal(
                                `CONCAT('http://localhost:4000/api/productos/detalle/', Producto.idproducto)`
                            ),
                            "url",
                        ],
                    ],
                }
            }
        )
            .then(productos => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: productos.length,
                        url: req._parsedOriginalUrl.path
                    },
                    data: productos,
                })
            })
    },
    'detalle': (req, res) => {
        let idProducto = req.params.id
        db.Producto.findByPk(idProducto)
            .then(producto => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: req._parsedOriginalUrl.path
                    },
                    data: producto,
                })
            })
    }
}

module.exports = apiControllers;