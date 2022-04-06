const router = require('express').Router();
const { Customer, NewListing, Handyman } = require('../models');

router.get('/customer/:id', async (req, res) => {
    const response1 = await Customer.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    });

    const response2 = await NewListing.findAll({
        attributes: ['id', 'title', 'post_content', 'price', 'created_at'],
        include: {
            model: Handyman,
            attributes: ['id', 'firstName', 'lastName', 'email']
        }
    });

    if (response1 && response2) {
        const customerData = response1
        const listingsData = response2

        res.render('dash-cust', { customerData, listingsData, loggedIn: true });
    } else {
        res.status(500).json({ message: 'there was an error rediring the page' });
    }
});

router.get('/handyman/:id', (req, res) => {
    Handyman.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: {
            model: NewListing,
            attributes: ['id', 'title', 'post_content', 'price', 'created_at']
        }
    })
        .then(dbHandymanData => {
            if(!dbHandymanData) {
                res.status(404).json({ message: 'No handyman with this id' });
                return;
            }
            const handyman = dbHandymanData.get({ plain: true });
            res.render('dash-hand', { handyman, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;