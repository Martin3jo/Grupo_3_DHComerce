module.exports = (sequelize, DataTypes) => {
    let alias = "Pedido"
    let cols = {
        idpcliente: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
    
        },
        detalles: {
            type: DataTypes.STRING(100),
            defaultValue : null
        },
        estado: {
            type: DataTypes.STRING(15),
            defaultValue : null
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        fk_idcliente :{
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }
    let config = {
        tableName : "pedidos",
        createdAt: "created_at",
        updatedAt: "updated_at",
        timestamps: true
    }
    const Pedido = sequelize.define(alias, cols, config)
    Pedido.associate = function(models){
        Pedido.belongsTo(models.Cliente, {
            as : "Cliente",
            foreignKey : "fk_idcliente"
        })
        Pedido.hasMany(models.Producto, {
            as : "Producto",
            foreignKey : "fk_idpedido"
        })
    }
    

    return Pedido
    }