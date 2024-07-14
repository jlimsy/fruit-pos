const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/productsController");

router.get("/", productsCtrl.getAll);
router.post("/", productsCtrl.create);

module.exports = router;
