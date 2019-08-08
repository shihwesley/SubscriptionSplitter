const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    console.log("creating");
    console.log(req.body);
    db.User
      .create(req.body)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
};