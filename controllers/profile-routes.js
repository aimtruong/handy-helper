
const router = require("express").Router();
const { Review, Handyman, Customer, Specialty, NewListing } = require("../models");
const withAuthHan = require("../utils/authHan");

// GET all reviews in profile
router.get("/", (req, res) => {
    Handyman.findAll({
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
                attributes: ["id", "title", "post_content", "price", "created_at"],
                include: {
                    model: Handyman,
                    attributes: ["firstName", "lastName"]
                }
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
        .then(dbHandyData => {
            const handymans = dbHandyData.map(handyman => handyman.get({ plain: true }));
            const listings = handymans.filter(({listing}) => listing);
            //res.json(handymans);
            //res.json(listings);
            res.render('profile', { 
                handymans,
                listings
            });
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
            'speciality',
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