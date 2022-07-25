module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING(255)
        },
    }

    let config = {
        tableName: 'Categories',
        timestamps: false
    }

const Categorie = sequelize.define(alias, cols, config)

Categorie.associate = function(models) {
    Categorie.hasMany(models.Products, {
        as: 'products',
        foreignKey: 'category_id'
    })
}

return Categorie
}
