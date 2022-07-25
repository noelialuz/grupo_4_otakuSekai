module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        date: {
            type: dataTypes.DATE
        },
        total: {
            type: dataTypes.DOUBLE
        },
        qty_products: {
            type: dataTypes.FLOAT
        }
    }

    let config = {
        tableName: 'Sales',
        timestamps: false
    }

const Sale = sequelize.define(alias, cols, config)

Sale.associate = function(models) {
    Sale.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'id_user'
    })

    Sale.belongsTo(models.Products, {
        as: 'products',
        through: 'sales_detail',
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        timestamps: false
    })
}

return Sale
}

