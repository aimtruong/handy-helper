
const router = require("express").Router();
const { Handyman } = require("../../models");


// GET all handymans
router.get("/", (req, res) => {
    // access Handyman model and run .findAll() method
    Handyman.findAll({
        attributes: { exclude: ["password"] }
    })
        .then(dbHandymanData => res.json(dbHandymanData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    Handyman.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        businessName: req.body.businessName,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbHandymanData => {
            req.session.save(() => {
                req.session.handyman_id = dbHandymanData.id;
                req.session.username = dbHandymanData.username;
                req.session.loggedIn = true;

                res.json(dbHandymanData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;