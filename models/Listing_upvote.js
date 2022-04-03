const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing_upvote extends Model {}

Listing_upvote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        listing_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'newListing',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'listing_upvote'
    }
);

module.exports = Listing_upvote;