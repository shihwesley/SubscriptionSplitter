const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  plan: { type: String, required: true },
  //usersAmount: { type: Integer, required: true },
  //price: {type: Double, required: true},
  description: {type: String},
  category: {type: String, required: true}
});

const Service = mongoose.model("services", serviceSchema);

module.exports = Service;
