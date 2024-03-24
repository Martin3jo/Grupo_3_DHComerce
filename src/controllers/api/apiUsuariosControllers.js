const db = require('../../database/models');
const sequelize = db.sequelize;

const apiUsuariosControllers = {
    'list': (req, res) => {
        db.Cliente.findAll()
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
    }
}

module.exports = apiUsuariosControllers;