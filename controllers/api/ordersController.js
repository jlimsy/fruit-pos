const Order = require("../../models/order");
const mongoose = require("mongoose");

async function create(req, res) {
  try {
    const userId = req.user._id;

    console.log("req.body.items", req.body.items);

    const order = await Order.create({
      user: userId,
      items: req.body.items,
      ...req.body,
    });

    console.log("order", order);

    for (let i = 0; i < order.items.length; i++) {
      const item = order.items[i];
      const fruit = await mongoose.model("Product").findById(item.fruit);
      fruit.remainingStock -= item.quantity;
      await fruit.save();
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getMyOrders(req, res) {
  try {
    const myOrder = await Order.find({ user: req.user._id })
      .populate({
        path: "items.fruit",
        model: "Product",
        select: "fruit",
      })
      .sort({ createdAt: -1 });

    res.json(myOrder);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const orders = await Order.find({})
      .populate({
        path: "user",
        model: "User",
        select: "name",
      })
      .populate({
        path: "items.fruit",
        model: "Product",
        select: "fruit",
      })
      .sort({ status: -1 })
      .sort({ createdAt: -1 });

    console.log(orders);
    res.json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { create, getMyOrders, index };
