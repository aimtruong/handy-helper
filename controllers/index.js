
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const profileRoutes = require("./profile-routes.js");
const messagingRoutes = require('./messaging-routes.js')

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);
router.use("/messaging", messagingRoutes)


router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;

