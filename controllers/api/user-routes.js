<<<<<<< HEAD
const router = require('express').Router();
const { Customer, Handyman } = require('../../models');

// GET /api/users 
router.get('/', (req, res) => {
    Customer.findAll({
        attributes: { exclude: ['password'] }
=======
const router = require("express").Router();
const { Customer } = require("../../models");


// GET all customers
router.get("/", (req, res) => {
    // access Customer model and run .findAll() method
    Customer.findAll({
        attributes: { exclude: ["password"] }
>>>>>>> 63378691bf7b0132c4a2d7fb2904c24da2d78d85
    })
        .then(dbCustomerData => res.json(dbCustomerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

<<<<<<< HEAD
// GET /api/users/:id 
router.get('/', (req, res) => {
    Customer.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: []
    })
})
=======
router.post("/", (req, res) => {
    Customer.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbCustomerData => {
            req.session.save(() => {
                req.session.customer_id = dbCustomerData.id;
                req.session.username = dbCustomerData.username;
                req.session.loggedIn = true;

                res.json(dbCustomerData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

>>>>>>> 63378691bf7b0132c4a2d7fb2904c24da2d78d85

module.exports = router;