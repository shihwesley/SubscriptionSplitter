const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  plan: { type: String, required: true },
  usersAmount: { type: Double, required: true },
  price: {type: Double, required: true},
  description: {type: String},
<<<<<<< HEAD
=======
  category: {type: String, required: true}
>>>>>>> cd52ac0af826173eb9629643ef8bba094ca104e0
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
