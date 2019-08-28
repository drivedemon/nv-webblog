const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, option) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
    }

    return bcrypt
    .genSaltSync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}
// create table name and field in database 
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING,
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true 
        }
        return false
    }

    User.associate = function (models) {}

    return User;
}