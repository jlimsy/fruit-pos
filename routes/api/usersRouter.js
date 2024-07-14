const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersController");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);

module.exports = router;
