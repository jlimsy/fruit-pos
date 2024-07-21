const jwt = require("jsonwebtoken");
const log = require("debug")("middleware:authJWT");

const authJWT = (req, res, next) => {
  // log("req.user %o", req.user);
  // log("req.body %o", req.body);

  try {
    const token = req.get("Authorization").split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.user;

    next();
  } catch (error) {
    res.status(403).json({ message: "Unauthorized" });
  }
};

module.exports = { authJWT };
