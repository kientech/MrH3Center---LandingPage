const express = require("express");
const router = express.Router();
const subcribeController = require("../controllers/subcribeController");

router.post("/subcribes", subcribeController.createSubcribe);
router.get("/subcribes", subcribeController.getSubcribes);

module.exports = router;
