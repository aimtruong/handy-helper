
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const profileRoutes = require("./profile-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);
<<<<<<< HEAD
router.use("/listing", listingRoutes);
=======
>>>>>>> 260379a2ce1e15c979fc5bfe2858a45e2caa9383


router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;

