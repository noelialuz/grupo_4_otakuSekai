module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: {
            type: dataTypes.STRING(255)
        },
        dni: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING(255)
        },
        address: {
            type: dataTypes.STRING(255)
        },
        country_id: {
            type: dataTypes.INTEGER
        },
        phone: {
            type: dataTypes.STRING(255)
        },
        birthday: {
            type: dataTypes.DATE
        },
        password: {
            type: dataTypes.STRING(255)
        },
        profile_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }

const User = sequelize.define(alias, cols, config)

User.associate = function(models) {
    User.belongsTo(models.Countries, {
        as: 'countries',
        foreignKey: 'id_country'
    }),
    User.belongsTo(models.Profiles, {
        as: 'profiles',
        foreignKey: 'id_profile'
    }),
    User.hasMany(models.Sales, {
        as: 'sales',
        foreignKey: 'id_user'
    }) 
}

return User
}

