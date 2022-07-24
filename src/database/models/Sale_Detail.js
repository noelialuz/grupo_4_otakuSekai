module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales_Detail';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sale_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        qty_product: {
            type: dataTypes.FLOAT
        },
    }

    let config = {
        tableName: 'Sales_Detail',
        timestamps: false
    }

const Sale_Detail = sequelize.define(alias, cols, config)
return Sale_Detail
}

