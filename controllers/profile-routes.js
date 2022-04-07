
const router = require("express").Router();
const { Review, Handyman, Customer, Specialty, NewListing } = require("../models");
const withAuthHan = require("../utils/authHan");

// GET all reviews in profile
router.get("/", withAuthHan,  (req, res) => {
    Handyman.findOne({
        where: {
            id: req.session.handyman_id
        },
        attributes: [
            'id',
            'firstName',
            'lastName',
            'businessName',
            'bio'
        ],
        include: [
            {
                model: Specialty,
                attributes: ["id", "title"]
            },
            {
                model: NewListing,
                attributes: ["id", "title", "post_content", "price", "created_at"]
            },
            {
                model: Review,
                attributes: [ "id", "title", "review_text" ],
                include: {
                    model: Customer,
                    attributes: [ "id", "username" ]
                }
            }
        ]
    })
        .then(dbReviewsData => {
            res.json(dbReviewsData);
            // serialize data before passing to template
            //const reviews = dbReviewsData.map(reviews => reviews.get({ plain: true }));
            //res.render('profile', { reviews, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a bio to edit
router.get("/edit/:id", withAuthHan,  (req, res) => {
    Handyman.findByPk(req.params.id, {
        attributes: [
            'bio'
        ]
      })
        .then(dbBioData => {
            if (dbBioData) {
                const bio = dbBioData.get({ plain: true });
                
                res.render('edit-profile', {
                    bio,
                    loggedIn: true
                });
            }
            else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;