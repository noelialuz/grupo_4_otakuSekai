module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(255)
        },
        birthday: {
            type: dataTypes.DATE,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(255)
        },
        profile_id: {
            type: dataTypes.INTEGER,
            allowNull: false
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
        foreignKey: 'country_id'
    }),
    User.belongsTo(models.Profiles, {
        as: 'profiles',
        foreignKey: 'profile_id'
    }),
    User.hasMany(models.Sales, {
        as: 'sales',
        foreignKey: 'user_id'
    }) 
}

return User
}

