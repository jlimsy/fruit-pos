const Order = require("../../models/order");

async function create(req, res) {
  try {
    const userId = req.user._id;

    console.log(req.body);

    const convertFruitIdToObjectId = res.body.map((item) => {
      return {
        fruit: item._id,
        quantity: item.quantity,
      };
    });

    const order = await Order.create({ ...req.body, user: userId });

    console.log(order);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { create };
