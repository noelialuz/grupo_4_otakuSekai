module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        serie_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL
        },
        discount: {
            type: dataTypes.FLOAT
        },
        description: {
            type: dataTypes.STRING(255)
        },
        image: {
            type: dataTypes.STRING(255)
        },
        deleted: {
            type: dataTypes.BOOLEAN
        },
        stock: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

const Product = sequelize.define(alias, cols, config)

Product.associate = function(models) {
    Product.belongsTo(models.Categories, {
        as: 'categories',
        foreignKey: 'id_category'
    })

    Product.belongsTo(models.Series, {
        as: 'series',
        foreignKey: 'id_serie'
    })

    Product.belongsToMany(models.Sales, {
        as: 'sales',
        through: 'sales_detail',
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        timestamps: false
    })
}

return Product
}

