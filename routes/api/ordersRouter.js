const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/ordersController");
const { authJWT } = require("../../middleware/authJWT");
const { checkRole } = require("../../middleware/checkRole");

router.post("/", authJWT, ordersCtrl.create);
router.get("/", authJWT, ordersCtrl.getMyOrders);
router.get("/all", authJWT, checkRole("owner"), ordersCtrl.index);

router.get(
  "/sales/daily",
  authJWT,
  checkRole("owner"),
  ordersCtrl.getFruitsPerDay
);

module.exports = router;
