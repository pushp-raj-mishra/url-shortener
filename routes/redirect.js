const express = require("express");
const { redirectTo,handleUserLogin } = require("../controllers/redirect");
const router = express.Router();

router.route("/signup").get((req, res) => {
  res.render("signup", { originalID: null });
});

router.route("/login").get((req,res)=>{res.render("login",{error:null})}).post(handleUserLogin);
router.get("/:shortID", redirectTo);

module.exports = router;
