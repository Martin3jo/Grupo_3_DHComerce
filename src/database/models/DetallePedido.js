module.exports = (sequelize, DataTypes) => {
    let alias = "DetallePedido"
    let cols = {
        iddetallepedido: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad_pedido: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        dni_cliente: {
            type: DataTypes.STRING(15)
        },
        nombre_cliente: {
            type: DataTypes.STRING(100)
        },
        idproducto_producto: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        marca_producto: {
            type: DataTypes.STRING(100)
        },
        precio_producto: {
            type: DataTypes.DECIMAL(10,2).UNSIGNED
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        fk_idpedido: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    }
    let config = {
        tableName: "detallespedidos",
        createdAt: "created_at",
        updatedAt: "updated_at",
        timestamps: true
    }
    const DetallePedido = sequelize.define(alias, cols, config)
    DetallePedido.associate = function(models){
        DetallePedido.belongsTo(models.Pedido, {
            as : "DetallePedido",
            foreignKey : "fk_idpedido"
        })
    }
    return DetallePedido
    }