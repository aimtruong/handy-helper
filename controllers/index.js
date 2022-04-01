const router = require('express').Router();

const homeRoutes = require('./homeroutes.js')

router.use('/', homeRoutes)

module.exports = router;