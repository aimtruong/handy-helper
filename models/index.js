
const Handyman = require("./Handyman");
const NewListing = require("./NewListing");
const Specialty = require("./Specialty");
const Tag = require("./Tag");

const Customer = require("./Customer");
const Review = require("./Review");

//const Listing_Upvote = require("./Listing_upvote");
const Profile_Upvote = require("./Profile_upvote");
const ListingTag = require("./ListingTag");

// create associations
Handyman.hasMany(NewListing, {
    foreignKey: 'handyman_id' // from NewListing
});

NewListing.belongsTo(Handyman, {
    foreignKey: 'handyman_id' // from NewListing
});

Handyman.hasMany(Specialty, {
    foreignKey: 'handyman_id' // from Specialty
});

Specialty.belongsTo(Handyman, {
    foreignKey: 'handyman_id' // from Specialty
});

Handyman.belongsToMany(Customer, {
    through: Profile_Upvote,
    foreignKey: 'handyman_id'
});

Review.belongsToMany(Handyman, {
    through: Profile_Upvote,
    foreignKey: 'customer_id'
});

Handyman.hasMany(Review, {
    foreignKey: 'handyman_id' // from Review
});

Customer.hasMany(Review, {
    foreignKey: 'customer_id' // from Review
});

Review.belongsTo(Customer, {
    foreignKey: 'customer_id' // from Review
});

NewListing.belongsToMany(Tag, {
    through: ListingTag,
    foreignKey: "listing_id"
});

Tag.hasMany(NewListing, {
    foreignKey: 'tag_id'
});

/*
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
*/


module.exports = {
    Handyman,
    NewListing,
    Specialty,
    Tag,
    Customer,
    Review,
//    Listing_Upvote,
    Profile_Upvote,
    ListingTag
}