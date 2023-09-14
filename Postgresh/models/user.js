const sequelize = require('../config/sequelize');
const { Model, DataTypes } = require('sequelize');

class User extends Model { 
    name;
    email;
    password;

}

User.init(
    {
        name: {
            type:DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            primaryKey:true,
            unique: true
        },
        password:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'Users',
    }
);

module.exports = User;
