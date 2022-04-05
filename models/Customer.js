const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
    //method to run on a user instance to check the password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, //this column is the primary key
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, //disallows duplicate
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newCustomerData) {
                newCustomerData.password = await bcrypt.hash(newCustomerData.password, 10)
                return newCustomerData;
            },
            async beforeUpdate(updatedCustomerData) {
                updatedCustomerData.password = await bcrypt.hash(updatedCustomerData.password, 10)
                return updatedCustomerData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer'
    }
)

module.exports = Customer;