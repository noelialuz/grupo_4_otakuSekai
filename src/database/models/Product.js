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
return Product
}

