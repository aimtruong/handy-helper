const router = require('express').Router();
const { Customer, Handyman, Review, Specialty, NewListing } = require('../../models');

// GET /api/users/customer 
router.get('/customer', (req, res) => {
    Customer.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbCustomerData => res.json(dbCustomerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get /api/users/handyman
router.get('/handyman', (req, res) => {
    Handyman.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbHandymanData => res.json(dbHandymanData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/customer/:id 
router.get('/customer/:id', (req, res) => {
    Customer.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Review,
                attributes: ['id', 'title', 'review_text', 'created_at']
            }
        ]
    })
        .then(dbCustomerData => {
            if (!dbCustomerData) {
                res.status(404).json({ message: 'No customer with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/handyman/:id
router.get('/handyman/:id', (req, res) => {
    Handyman.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Specialty,
                attributes: ['id', 'title', 'description']
            },
            {
                model: NewListing,
                attributes: ['id', 'title', 'post_content', 'price', 'created_at']
            }
        ] 
    })
        .then(dbHandymanData => {
            if (!dbHandymanData) {
                res.status(404).json({ message: 'No handyman with this id' });
                return;
            }
            res.json(dbHandymanData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users/customer
router.post("/customer", (req, res) => {
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

// POST /api/users/handyman
router.post('/handyman', (req, res) => {
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
                req.session.username = dbHandymanData.firstName;
                req.session.loggedIn = true;

                res.json(dbHandymanData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT api/users/customer/:id
router.put('/customer/:id', (req, res) => {
    Customer.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbCustomerData => {
            if (!dbCustomerData[0]) {
                res.status(404).json({ message: 'No customer with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT api/users/handyman/:id
router.put('/handyman/:id', (req, res) => {
    Handyman.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbHandymanData => {
            if (!dbHandymanData[0]) {
                res.status(404).json({ message: 'No handyman with this id' });
                return;
            }
            res.json(dbHandymanData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/customer/:id
router.delete('/customer/:id', (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCustomerData => {
            if (!dbCustomerData) {
                res.status(404).json({ message: 'No customer with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/handyman/:id
router.delete('/handyman/:id', (req, res) => {
    Handyman.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbHandymanData => {
            if (!dbHandymanData) {
                res.status(404).json({ message: 'No handyman with this id '});
                return;
            }
            res.json(dbHandymanData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;