
const router = require('express').Router();
const { Handyman, NewListing, Listing_upvote, Tag, ListingTag } = require("../models");
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

// GET all listings
router.get("/", (req, res) => {
    NewListing.findAll({
        attributes: [
            "id", 
            "title", 
            "post_content",
            "price",
            "created_at",
            //[
            //    sequelize.literal("(SELECT COUNT(*) FROM listing_upvote WHERE newListing.id = listing_upvote.listing_id)"), 
            //    "vote_count"
            //]
        ],
        include: [
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"],
            },
            {
                model: Tag,
                attributes: ["id", "title", "description", "newListing_id"],
                through: ListingTag
            }
        ]
    })
        .then(dbListingData => res.json(dbListingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a listing
router.get("/:id", (req, res) => {
    NewListing.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id", 
            "title", 
            "post_content",
            "price",
            "created_at",
            //[
            //    sequelize.literal("(SELECT COUNT(*) FROM listing_upvote WHERE newListing.id = listing_upvote.listing_id)"), 
            //    "vote_count"
            //]
        ],
        include: [
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"],
            },
            {
                model: Tag,
                attributes: ["id", "title", "description", "newListing_id"],
                through: ListingTag
            }
        ]
    })
    .then(dbListingData => {
        if(!dbListingData){
            res.status(404).json({ message: "No listing found with this id" });
            return;
        }
        res.json(dbListingData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST a new listing
router.post("/", /* withAuth, */ (req, res) => {
    /* should look like...
        title: req.body.title,
        post_content: req.body.post_content,
        price: req.body.price,
        tagIds: req.body.tag_id,
        handyman_id: req.session.handyman_id
    */
    NewListing.create(req.body)
    .then((listing) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        if (req.body.tagIds.length) {
          const NewListingIdArr = req.body.tagIds.map((tag_id) => {
            return {
              listing_id: listing.id,
              tag_id,
            };
          });
          return ListingTag.bulkCreate(NewListingIdArr);
        }
        // if no product tags, just respond
        res.status(200).json(listing);
    })
    .then(dbListingData => res.json(dbListingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT a upvote
router.put("/upvote", /* withAuth, */ (req, res) => {
    // check if session exists first
    if(req.session){
        // custom static method created in models/Post.js
        NewListing.upvote( { ...req.body, handyman_id: req.session.handyman_id }, { Listing_upvote, Handyman })
            .then(UpdatedVoteData => res.json(UpdatedVoteData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

// PUT a listing
router.put("/:id", /* withAuth, */ (req, res) => {
    NewListing.update(
        {
            title: req.body.title,
            post_content: req.body.post_content,
            price: req.body.price
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbListingData => {
        if(!dbListingData){
            res.status(404).json({ message: "No listing found with this id" });
            return;
        }
        res.json(dbListingData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE a listing
router.delete("/:id", /* withAuth, */ (req,res) => {
    NewListing.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbListingData => {
        if(!dbListingData){
            res.status(400).json({ message: "No listing found with this id" });
            return;
        }
        res.json(dbListingData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;
