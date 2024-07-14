const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "48h" });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(404).json({ msg: "Incorrect credentials" });
    }

    res.json(createJWT(user));
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { create, login };
