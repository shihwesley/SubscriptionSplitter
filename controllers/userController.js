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
  find: function(req, res) {
    db.User
      .find({"userID": req.userID})
      .then(dbModel => console.log("profile: " + res.json(dbModel)))
      .catch(err => res.status(422).json(err));
  },

};