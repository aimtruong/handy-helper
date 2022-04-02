const router = require('express').Router()
const sequelize = require('../config/connection');



router.get('/', (req, res) => {
    res.render('layouts/main')
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router