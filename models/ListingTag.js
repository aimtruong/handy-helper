const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ListingTag extends Model {}

ListingTag.init(
  // columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        listing_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "newListing",
                key: "id"
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "tag",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'listing_tag',
    }
);

module.exports = ListingTag;
