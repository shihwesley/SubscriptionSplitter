const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// Matches with "/api/groups"
router.route("/")
  .get(groupController.findAll)
  .post(groupController.create);

module.exports = router;