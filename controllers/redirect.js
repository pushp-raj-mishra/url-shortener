const shortURL = require("../models/shorten");
const User = require("../models/user");
const { setUser } = require("../services/auth");

async function redirectTo(req, res) {
  const shortID = req.params.shortID;
  const entry = await shortURL.findOneAndUpdate(
    {
      shortID,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.originalID);
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login", { error: "Invalid username or passsword" });
  }
  const urls = await shortURL.find();
  const sessionId = await setUser(user);
  res.cookie("uid", sessionId);
  res.redirect("/home");
  //res.render("home", { urls, generatedURL: null });
}

module.exports = {
  redirectTo,
  handleUserLogin,
};
