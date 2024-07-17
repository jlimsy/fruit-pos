const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/ordersController");
const { authJWT } = require("../../middleware/authJWT");

router.post("/", authJWT, ordersCtrl.create);
router.get("/", authJWT, ordersCtrl.getMyOrders);

module.exports = router;
