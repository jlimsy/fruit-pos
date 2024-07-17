const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        fruit: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: {
      type: mongoose.Types.Decimal128,
      required: true,
      get: (v) => (v ? Number(parseFloat(v.toString()).toFixed(2)) : v),
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "out for delivery", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

orderSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Order", orderSchema);
