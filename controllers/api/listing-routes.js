
const router = require('express').Router();
const { Handyman, NewListing, Tag, ListingTag } = require("../../models");
const withAuthHan = require("../../utils/authHan");

// GET all listings
router.get("/", (req, res) => {
    NewListing.findAll({
        attributes: [
            "id", 
            "title", 
            "post_content",
            "price",
            "created_at"
        ],
        include: [
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"],
            },
            {
                model: Tag,
                attributes: ["id", "title"],
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
            "created_at"
        ],
        include: [
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"],
            },
            {
                model: Tag,
                attributes: ["id", "title"],
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
router.post("/", withAuthHan, (req, res) => {
    /* should look like...
        title: req.body.title,
        post_content: req.body.post_content,
        price: req.body.price,
        tagIds: req.body.tag_id,
        handyman_id: req.session.handyman_id
    */
    NewListing.create({
        title: req.body.title,
        post_content: req.body.post_content,
        price: req.body.price,
        handyman_id: req.session.handyman_id
    })
    .then((listing) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        // if (req.body.tagIds.length) {
        //   const NewListingIdArr = req.body.tagIds.map((tag_id) => {
        //     return {
        //       listing_id: listing.id,
        //       tag_id,
        //     };
        //   });
        //   return ListingTag.bulkCreate(NewListingIdArr);
        // }
        // if no product tags, just respond
        res.status(200).json(listing);
    })
    .then(dbListingData => res.json(dbListingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT a listing
router.put("/:id", withAuthHan, (req, res) => {
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
router.delete("/:id", withAuthHan, (req,res) => {
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

