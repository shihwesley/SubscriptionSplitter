const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  useramount: String,
  date: { type: Date, default: Date.now }
});

const Groups = mongoose.model("Groups", groupSchema);

module.exports = Groups;
