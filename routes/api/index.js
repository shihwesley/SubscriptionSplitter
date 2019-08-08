const router = require("express").Router();
const usersRoutes = require("./users");
const serviceRoutes = require("./service");
const groupRoutes = require("./groups");

// Book routes
router.use("/groups", groupRoutes);
router.use("/users", usersRoutes);
//router.use("/service", serviceRoutes);

module.exports = router;
