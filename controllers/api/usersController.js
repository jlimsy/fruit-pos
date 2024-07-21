const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const log = require("debug")("fruit-pos:controllers:usersController");

async function checkUserExists(req, res) {
  const { email } = req.body;

  // log("email %o", email);

  try {
    const existingUser = await User.findOne({ email });
    // log("userExists  %o", existingUser);

    if (existingUser) {
      // log("userExists  %o", existingUser);

      return res.status(409).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function create(req, res) {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    } else {
      const user = await User.create(req.body);
      const token = createJWT(user);
      res.status(201).json(token);
    }
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

module.exports = { create, checkUserExists, login };
