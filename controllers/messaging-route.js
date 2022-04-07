const express = require('express')
// const withAuth = require('../utils/auth')
const router = express.Router()
const path = require('path')

// router.get('/', (req,res) => {
//     res.sendFile(path.resolve('./public/messaging.html')) 
// })

// router.get('*', (req, res) => {           //return index.html 
//     res.sendFile(path.join('./public/home.html'));
// })

//module.exports = router;






// const withAuth = require('../utils/auth')

router.get('/', (req,res) => {
    res.render('messaging')
})


module.exports = router;









