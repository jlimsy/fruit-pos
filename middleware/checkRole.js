const checkRole = (role) => {
  return (req, res, next) => {
    console.log("Checking role...", req);
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" }); // User does not have the required role
    }
  };
};

module.exports = { checkRole };
