const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/productsController");
const { authJWT } = require("../../middleware/authJWT");
const { checkRole } = require("../../middleware/checkRole");

router.get("/", authJWT, productsCtrl.index);
router.post("/", authJWT, productsCtrl.create);

module.exports = router;
