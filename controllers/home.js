const shortURL = require("../models/shorten");

async function handleGetRequest(req, res) {
  const urls = await shortURL.find();
  res.render("home", { urls });
}

module.exports = {
  handleGetRequest,
};
