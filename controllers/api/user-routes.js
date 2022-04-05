const router = require("express").Router();
const { Customer } = require("../../models");


// GET all customers
router.get("/", (req, res) => {
    // access Customer model and run .findAll() method
    Customer.findAll({
        attributes: { exclude: ["password"] }
    })
        .then(dbCustomerData => res.json(dbCustomerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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


module.exports = router;