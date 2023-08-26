const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController");

router.get("/", pageController.getIndex);
router.get("/app", pageController.getServerIdentity);

module.exports = router;