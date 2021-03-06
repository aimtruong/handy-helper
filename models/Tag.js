const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
    // columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag'
    }
);

module.exports = Tag;