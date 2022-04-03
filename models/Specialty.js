const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Specialty extends Model {}

Specialty.init(
    {
        id: {
            type: DataTypes.INTEGER,
            AllowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        handyman_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'handyman',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'specialty'
    }
);

module.exports = Specialty;