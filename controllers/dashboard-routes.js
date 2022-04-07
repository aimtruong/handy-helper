const router = require('express').Router();
const { Customer, NewListing, Handyman } = require('../models');

router.get('/', async (req, res) => {
    if (req.session.isHandyman) {
        const response = await Handyman.findOne({
            where: {
                id: req.session.handyman_id
            },
            attributes: { exclude: ['password'] },
            include: {
                model: NewListing,
                attributes: ['id', 'title', 'post_content', 'price', 'created_at']
            }
        });

        if(response) {
            const handymans = response.get({ plain: true });

            res.render('dash-hand', { handymans, loggedIn: true });
        } else {
            res.status(500).json({ message: 'there was an error rendiring the page' });
        }
    } else {
        const response1 = await Customer.findOne({
            where: {
                id: req.session.customer_id
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
            const customerData = response1.get({ plain: true });
            const listings = response2.map(listing => listing.get({ plain: true }));
    
            res.render('dash-cust', { customerData, listings, loggedIn: true });
        } else {
            res.status(500).json({ message: 'there was an error rendiring the page' });
        }
    }
});

module.exports = router;