const router = require("express").Router();
const usersRoutes = require("./users");
const serviceRoutes = require("./service");

// Book routes
router.use("/users", usersRoutes);
//router.use("/service", serviceRoutes);

module.exports = router;
