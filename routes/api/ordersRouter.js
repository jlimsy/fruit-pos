const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/ordersController");

router.post("/", ordersCtrl.create);

module.exports = router;
