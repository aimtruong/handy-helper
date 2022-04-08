
const router = require('express').Router();
const { Review, Handyman, Customer } = require("../../models");
const withAuthCus = require("../../utils/authCus");

// GET all reviews
router.get("/", (req, res) => {
    Review.findAll({

        attributes: [
            "id",
            "title", 
            "review_text",
            "created_at"
        ],
        include: [
            {
                model: Customer,
                attributes: ["id", "username"]
            },
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"]
            }
        ]
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a review
router.get("/:id", (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id",
            "title", 
            "review_text",
            "customer_id", 
            "created_at"
        ],
        include: [
            {
                model: Customer,
                attributes: ["id", "username"]
            },
            {
                model: Handyman,
                attributes: ["id", "firstName", "lastName", "businessName"]
            }
        ]
    })
    .then(dbReviewData => {
        if(!dbReviewData){
            res.status(404).json({ message: "No review found with this id" });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST a review
router.post("/",  withAuthCus, (req, res) => {
    Review.create({
        title: req.body.title,
        review_text: req.body.review_text,
        customer_id: req.session.customer_id,
        handyman_id: req.body.handyman_id
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT a review
router.put("/:id",  withAuthCus,  (req, res) => {
    Review.update(
        {
            title: req.body.title,
            review_text: req.body.review_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbReviewData => {
        if(!dbReviewData){
            res.status(404).json({ message: "No review found with this id" });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE a review
router.delete("/:id", withAuthCus, (req,res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewData => {
        if(!dbReviewData){
            res.status(400).json({ message: "No review found with this id" });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;

