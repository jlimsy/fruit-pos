const User = require("../../models/user");
const jwt = require("jsonwebtoken");

async function create(req, res) {
  try {
    const user = await User.create(req.body);

    const token = createJWT(user);
    console.log(token);
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "48h" });
}

module.exports = { create };
