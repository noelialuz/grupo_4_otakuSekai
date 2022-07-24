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
return Categorie
}
