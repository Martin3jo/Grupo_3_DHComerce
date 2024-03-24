const db = require('../../database/models');
const sequelize = db.sequelize;

const apiUsuariosControllers = {
    'list': (req, res) => {
        db.Cliente.findAll(
            {
                attributes: {
                    include: [
                        [
                            sequelize.literal(
                                `CONCAT('http://localhost:4000/api/usuarios/detalle/', Cliente.idcliente)`
                            ),
                            "url",
                        ],
                    ],
                }
            }
        )
            .then(clientes => {
                return res.status(200).json({
                    meta: {
                        status : 200,
                        total : clientes.length,
                        url : req._parsedOriginalUrl.path
                    },
                    data: clientes,
                })
            })
    },
    'detalle' : (req,res) => {
        let idCliente = req.params.id
        db.Cliente.findByPk(idCliente)
        .then(cliente => {
            return res.status(200).json({
                meta: {
                    status : 200,
                    url : req._parsedOriginalUrl.path
                },
                data: cliente,
            })
        })
    }
}

module.exports = apiUsuariosControllers;