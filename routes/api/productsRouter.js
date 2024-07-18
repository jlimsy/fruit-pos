const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/productsController");
const { authJWT } = require("../../middleware/authJWT");

router.get("/", authJWT, productsCtrl.getAll);
router.post("/", authJWT, productsCtrl.create);

module.exports = router;
