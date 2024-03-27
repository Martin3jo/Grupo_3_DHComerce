const db = require('../../database/models');
const sequelize = db.sequelize;

const apiCategoriasControllers = {
    'total':(req,res)=>{
        db.Categoria.findAll()
            .then(categorias => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: categorias.length,
                        url: 'http://localhost:4000/api/categorias'
                    },
                    data: categorias,
                })
            })
    }
}

module.exports = apiCategoriasControllers;