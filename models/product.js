const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  fruit: { type: String, required: true },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    get: (v) => (v ? Number(parseFloat(v.toString()).toFixed(2)) : v),
  },
  stock: { type: Number, required: true },
});

productSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Product", productSchema);
