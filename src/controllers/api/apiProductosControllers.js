const db = require('../../database/models');
const sequelize = db.sequelize;

const apiControllers = {
    'list': (req, res) => {
        db.Producto.findAll()
            .then(productos => {
                return res.status(200).json({
                    meta: {
                        status : 200,
                        total : productos.length,
                        url : req._parsedOriginalUrl.path
                    },
                    data: productos,
                })
            })
    }
}

module.exports = apiControllers;