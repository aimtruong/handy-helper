const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewListing extends Model {}

NewListing.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
      },
      handyman_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'handyman',
          key: 'id'
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
      freezeTableName: true,
      underscored: true,
      modelName: 'newListing'
    }
  );

  module.exports = NewListing;