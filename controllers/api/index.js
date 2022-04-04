
const router = require("express").Router();

// routes for users
const userRoutes = require("./user-routes.js");
const handymanRoutes = require("./handyman-routes.js");

// routes for users inputs
const messagesRoutes = require("./messages-routes.js");
const reviewRoutes = require("./review-routes.js");


router.use("/users", userRoutes);
router.use("/handymans", handymanRoutes);

router.use("/messages", messagesRoutes);
router.use("/reviews", reviewRoutes);


module.exports = router;