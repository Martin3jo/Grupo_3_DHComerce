const db = require('../../database/models');
const sequelize = db.sequelize;

const apiUsuariosControllers = {
    'list': (req, res) => {
        let paginaActual = parseInt(req.query.pagina) > 0 ? req.query.pagina : 1;
        let paginaElementos = 10;
        db.Cliente.findAll(
            {
                offset: (paginaActual - 1) * paginaElementos,
                limit: paginaElementos,
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
                        status: 200,
                        total: clientes.length,
                        url: 'http://localhost:4000/api/usuarios/?pagina=' + paginaActual,
                        next: 'http://localhost:4000/api/usuarios/?pagina=' + (parseInt(paginaActual) + 1),
                        previus: 'http://localhost:4000/api/usuarios/?pagina=' + (parseInt(paginaActual) - 1)
                    },
                    data: clientes,
                })
            })
    },
    'detalle': (req, res) => {
        let idCliente = req.params.id
        db.Cliente.findByPk(idCliente)
            .then(cliente => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: req._parsedOriginalUrl.path
                    },
                    data: cliente,
                })
            })
    }
}

module.exports = apiUsuariosControllers;