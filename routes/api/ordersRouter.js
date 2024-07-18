const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/ordersController");
const { authJWT } = require("../../middleware/authJWT");
const { checkRole } = require("../../middleware/checkRole");

router.post("/", authJWT, checkRole("owner"), ordersCtrl.create);
router.get("/", authJWT, ordersCtrl.getMyOrders);
router.get("/", authJWT, ordersCtrl.index);

module.exports = router;
