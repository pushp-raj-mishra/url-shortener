const express = require("express");
const { redirectTo, handleUserLogin } = require("../controllers/redirect");
const router = express.Router();
const { getUser } = require("../services/auth");

router.route("/").get((req, res) => {
  const uid = req.cookies.uid;
  const user = getUser(uid);

  if (user) {
    res.redirect("/home");
  } else {
    res.redirect("/login");
  }
});
router.route("/signup").get((req, res) => {
  res.render("signup", { originalID: null });
});

router
  .route("/login")
  .get((req, res) => {
    res.render("login", { error: null });
  })
  .post(handleUserLogin);
router.get("/:shortID", redirectTo);

module.exports = router;
