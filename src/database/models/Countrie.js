module.exports = (sequelize, dataTypes) => {
  let alias = "Countries";
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
    tableName: "Countries",
    timestamps: false,
  };

  const Countrie = sequelize.define(alias, cols, config);

  Countrie.associate = function(models) {
    Countrie.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'id_country'
    })
}

  return Countrie;
};
