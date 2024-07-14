const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/productsController");

router.post("/", productsCtrl.create);

module.exports = router;
