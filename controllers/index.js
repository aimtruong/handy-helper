
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const profileRoutes = require("./profile-routes.js");
const listingRoutes = require("./listing-routes.js");
const messageRoutes = require("./messaging-route.js")

// router.use("/api", apiRoutes);
router.use("/", homeRoutes);
//router.use("/dashboard", dashboardRoutes);
//router.use("/profile", profileRoutes);
router.use("/listing", listingRoutes);

router.use("/", messageRoutes);

router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;

