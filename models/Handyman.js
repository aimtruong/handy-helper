const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

const { Model, DataTypes } = require('sequelize')

class Handyman extends Model {
    //method to run on a user instance to check the password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Handyman.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, //this column is the primary key
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        businessName: {
            type: DataTypes.STRING,
            allowNull: true,
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
            async beforeCreate(newHandymanData) {
                newHandymanData.password = await bcrypt.hash(newHandymanData.password, 10)
                return newHandymanData;
            },
            async beforeUpdate(updatedHandymanData) {
                updatedHandymanData.password = await bcrypt.hash(updatedHandymanData.password, 10)
                return updatedHandymanData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'handyman'
    }
)

module.exports = Handyman;