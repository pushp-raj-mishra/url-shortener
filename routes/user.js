const express = require("express");
const { handleUserSignup } = require("../controllers/user");
const router = express.Router();

router.route("/").post(handleUserSignup);

module.exports = router;
