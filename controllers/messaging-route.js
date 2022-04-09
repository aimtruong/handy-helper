const express = require('express')
// const withAuth = require('../utils/auth')
const router = express.Router()
const path = require('path')

router.get('/', (req,res) => {
    res.sendFile(path.resolve('./public/html-templates/messaging.html')) 
})

// router.get('/', (req,res) => {
//     res.render(path.resolve('../messaging.html'))
// })


module.exports = router;
