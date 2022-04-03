
const Handyman = require("./Handyman");
const NewListing = require("./NewListing");
const Specialty = require("./Specialty");
const Tag = require("./Tag");

const Customer = require("./Customer");
const Review = require("./Review");
const Listing_Upvote = require("./Listing_upvote");
const Profile_Upvote = require("./Profile_upvote");


// create associations
Handyman.hasMany(NewListing, {
    foreignKey: 'handyman_id' // from NewListing
});

NewListing.belongsTo(Handyman, {
    foreignKey: 'handyman_id' // from NewListing
});

Handyman.hasMany(Specialty, {
    foreignKey: 'handyman_id' // from Speciality
});

NewListing.hasMany(Tag, {
    foreignKey: 'newListing_id'  // from Tag
});

Customer.hasMany(Review, {
    foreignKey: 'customer_id' // from Review
});

Review.belongsTo(Customer, {
    foreignKey: 'customer_id' // from Review
});

Listing_Upvote.belongsTo(Customer, {
    foreignKey: 'customer_id' // from Listing_upvote
});

Customer.hasMany(Listing_Upvote, {
    foreignKey: 'customer_id' // from Listing_upvote
});

Listing_Upvote.belongsTo(NewListing, {
    foreignKey: 'listing_id' // from Listing_upvote
});

NewListing.hasMany(Listing_Upvote, {
    foreignKey: 'listing_id' // from Listing_upvote
});

Profile_Upvote.belongsTo(Customer, {
    foreignKey: 'customer_id' // from Profile_upvote
});

Customer.hasMany(Profile_Upvote, {
    foreignKey: 'customer_id' // from Profile_upvote
});

// to add an assocation with customers and handymans when reviews works?
// to add an assocation with handymans and upvotes since they can also use the site?


module.exports = {
    Handyman,
    NewListing,
    Specialty,
    Tag,
    Customer,
    Review,
    Listing_Upvote,
    Profile_Upvote 
}