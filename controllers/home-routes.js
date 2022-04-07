
const router = require("express").Router();
const { Handyman, NewListing } = require("../models");


// GET handyman and newlisting routes for homepage
router.get('/', (req, res) => {
    Handyman.findAll({
        attributes: { exclude: ['email', 'password']},
        include: [
            {
                model: NewListing,
                attributes: ['id', 'title', 'post_content', 'price']
            }
        ]
    })
        .then(dbData => {
            const handymans = dbData.map(handyman => handyman.get({ plain: true }));
            //res.json(handymans);
            res.render('homepage', { 
                handymans

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// GET a handyman profile
router.get("/handymans/:id", (req, res) => {
    Handyman.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            
        ]
      })
        .then(dbData => {
            if (!dbData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
    
            // serialize the data
            const data = dbData.get({ plain: true });
    
            // pass data to template
            res.render('handyman-profile', {
                data
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
