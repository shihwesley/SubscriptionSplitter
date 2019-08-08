const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.find)
  .post(userController.create);

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.get('/logout', authController.logout);

// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);

module.exports = router;
