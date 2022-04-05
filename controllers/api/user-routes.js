const router = require('express').Router();
const { Customer, Handyman } = require('../../models');

// GET /api/users 
router.get('/', (req, res) => {
    Customer.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbCustomerData => res.json(dbCustomerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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

module.exports = router;