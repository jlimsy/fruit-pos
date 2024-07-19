const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  fruit: { type: String, required: true },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    get: (v) => (v ? Number(parseFloat(v.toString()).toFixed(2)) : v),
    set: (v) => mongoose.Types.Decimal128.fromString(Number(v).toFixed(2)),
  },
  startingStock: { type: Number, required: true },
  remainingStock: {
    type: Number,
    required: true,
    default: function () {
      return this.startingStock;
    },
  },
});

productSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Product", productSchema);
