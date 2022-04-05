
const router = require("express").Router();
const { Review, Handyman, Customer, Profile_upvote } = require("../models");
const withAuth = require("../utils/auth");

// GET all reviews in profile
router.get("/", /* withAuth, */ (req, res) => {
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
                attributes: ["id"],
                through: Profile_upvote
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

router.get("/edit/:id", withAuth, (req, res) => {
    Handyman.findByPk(req.params.id, {
        attributes: [
            'id',
            'bio'
        ]
      })
        .then(dbBioData => {
            if (dbBioData) {
                const bio = dbBioData.get({ plain: true });
                
                res.render('edit-bio', {
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