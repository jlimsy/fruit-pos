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

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { create };
