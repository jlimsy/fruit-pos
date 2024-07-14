const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  fruit: { type: String, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  stock: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
