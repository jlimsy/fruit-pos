function create(req, res) {
  res.json({
    user: {
      username: req.body.username,
      email: req.body.email,
    },
  });
}

module.exports = { create };
