
const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { User, } = require("../models");


// GET all routes for homepage
router.get('/', (req, res) => {
    User.findAll({
        attributes: [
            
        ]
    })
        .then(dbData => {
            const data = dbData.map(data => data.get({ plain: true }));
    
            res.render('homepage', { 
                data
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
  
    res.render('login');
});

// GET signup 
router.get('/sign-up', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
  
    res.render('signup');
});

// POST a 
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
