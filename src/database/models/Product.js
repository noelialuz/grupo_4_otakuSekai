module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        serie_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: dataTypes.FLOAT
        },
        description: {
            type: dataTypes.STRING(1000),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        deleted: {
            type: dataTypes.BOOLEAN
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
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
        foreignKey: 'category_id'
    })

    Product.belongsTo(models.Series, {
        as: 'series',
        foreignKey: 'serie_id'
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

