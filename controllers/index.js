
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const profileRoutes = require("./profile-routes.js");
const listingRoutes = require("./listing-routes.js");

// router.use("/api", apiRoutes);
router.use("/", homeRoutes);
<<<<<<< HEAD
// router.use("/dashboard", dashboardRoutes);
// router.use("/profile", profileRoutes);
// router.use("/listing", listingRoutes);
=======
//router.use("/dashboard", dashboardRoutes);
//router.use("/profile", profileRoutes);
router.use("/listing", listingRoutes);
>>>>>>> 63378691bf7b0132c4a2d7fb2904c24da2d78d85


router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;

