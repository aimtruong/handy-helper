const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    // columns
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
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
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
                model: "handyman",
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)

// Export the model
module.exports = Review;