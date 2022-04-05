
const router = require("express").Router();

// routes for users
const userRoutes = require("./user-routes.js");
const handymanRoutes = require("./handyman-routes.js");

// routes for handymans inputs
const TagRoutes = require("./tag-routes.js");

// routes for customers inputs
//const messagesRoutes = require("./messages-routes.js");
const reviewRoutes = require("./review-routes.js");


router.use("/users", userRoutes);
router.use("/handymans", handymanRoutes);

router.use("/tags", TagRoutes);

//router.use("/messages", messagesRoutes);
router.use("/reviews", reviewRoutes);


module.exports = router;