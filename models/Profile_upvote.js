const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile_upvote extends Model {} 

Profile_upvote.init(
    // columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
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
        modelName: 'profile_upvote'
    }
);

module.exports = Profile_upvote;