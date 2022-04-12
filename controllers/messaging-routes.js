const express = require('express')
// const withAuth = require('../utils/auth')
const router = express.Router()
const path = require('path')

router.get('/', (req,res) => {
    res.render('messenger') 
})

// router.get('*', (req, res) => {           //return index.html 
//     res.sendFile(path.join('./public/home.html'));
// })






// const withAuth = require('../utils/auth')

// router.get('/', (req,res) => {
//     res.render('messaging')
// })


module.exports = router;
