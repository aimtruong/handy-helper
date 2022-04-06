
const Handyman = require("./Handyman");
const NewListing = require("./NewListing");
const Specialty = require("./Specialty");
const Tag = require("./Tag");

const Customer = require("./Customer");
const Review = require("./Review");
const Listing_Upvote = require("./Listing_upvote");
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

Handyman.belongsToMany(Customer, {
    through: Profile_Upvote,
    foreignKey: 'handyman_id'
});

Review.belongsToMany(Handyman, {
    through: Profile_Upvote,
    foreignKey: 'customer_id'
});

NewListing.belongsToMany(Tag, {
    through: ListingTag,
    foreignKey: "listing_id"
});

Tag.belongsToMany(NewListing, {
    through: ListingTag,
    foreignKey: "tag_id"
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
    Profile_Upvote,
    ListingTag
}