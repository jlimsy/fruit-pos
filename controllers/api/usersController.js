const User = require("../../models/user");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    console.log(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { create };
