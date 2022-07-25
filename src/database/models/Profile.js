module.exports = (sequelize, dataTypes) => {
    let alias = 'Profiles';
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
        tableName: 'Profiles',
        timestamps: false
    }

const Profile = sequelize.define(alias, cols, config)

Profile.associate = function(models) {
    Profile.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'country_id'
    })
}

return Profile
}

