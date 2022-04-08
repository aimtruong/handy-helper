const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Handyman, NewListing } = require("../models");

<<<<<<< HEAD

// GET all routes for homepage
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

=======
const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Handyman, NewListing } = require("../models");


// GET all routes for homepage
router.get('/', (req, res) => {
    Handyman.findAll({
        attributes: [
            
        ]
    })
        .then(dbData => {
            const data = dbData.map(data => data.get({ plain: true }));
    
            res.render('homepage', { 
                data
>>>>>>> f4874035cfa754e539706cf7d61b2e5de7107d4a
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

// const router = require('express').Router()
// //const sequelize = require('../config/connection');
// const { Customer, NewListing } = require('../models')



// router.get('/', (req, res) => {
//     res.render('layouts/main')
// })

// router.get('/login', (req, res) => {
//     res.render('login')
// })

// module.exports = router

module.exports = router;
