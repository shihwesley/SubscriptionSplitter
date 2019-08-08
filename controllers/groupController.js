const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    console.log("creating groups");
    console.log("hello" + req.body.name);
    db.Groups
      .create(req.body)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    console.log("printing groups");
    db.Groups
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};