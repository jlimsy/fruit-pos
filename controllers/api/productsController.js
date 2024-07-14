const Product = require("../../models/product");

async function getAll(req, res) {
  try {
    const all = await Product.find({});

    res.json(all);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { getAll, create };
