module.exports = (sequelize, dataTypes) => {
    let alias = "Series";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: dataTypes.STRING(255),
      },
    };
    let config = {
      tableName: "Series",
      timestamps: false,
    };
  
    const Serie = sequelize.define(alias, cols, config);
  
    Serie.associate = function(models) {
        Serie.hasMany(models.Products, {
          as: 'Products',
          foreignKey: 'serie_id'
      })
  }
  
    return Serie;
  };
  