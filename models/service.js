const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  plan: { type: String, required: true },
  usersAmount: { type: Double, required: true },
  price: {type: Double, required: true},
  description: {type: String}
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
