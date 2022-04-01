const router = require('express').Router()
const sequelize = require('../config/connection');



router.get('/', (req, res) => {
    res.render('sign-in')
})

router.get()

module.exports = router