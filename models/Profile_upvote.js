const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile_upvote extends Model {} 

Profile_upvote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        }
        // does this relate to handyman by upvoting the 
        // handyman since we don't have a profile model?
        //profile_id: {
        //    type: DataTypes.INTEGER,
        //    references: {
        //        model: 'handyman',
        //        key: 'id'
        //    }
        //}
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile_upvote'
    }
);

module.exports = Profile_upvote;