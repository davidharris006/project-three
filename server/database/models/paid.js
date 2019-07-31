const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paidSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  payerId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  paid: {
    type: Boolean,
    require: true
  }
});

const Paids = mongoose.model("Paid", paidSchema);

module.exports = Paids;
