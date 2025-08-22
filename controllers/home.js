const shortURl = require("../models/shorten.js");
const { nanoid } = require("nanoid");

async function handleGetRequest(req, res) {
  const urls = await shortURl.find();
  res.render("home", { urls, generatedURL: null });
}

async function handleUrlShortening(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = nanoid(6);

  await shortURl.create({
    shortID: shortId,
    originalID: body.url,
    visitHistory: [],
  });
  const urls = await shortURl.find();
  res.render("home", { urls, generatedURL: shortId });
}

module.exports = {
  handleUrlShortening,
  handleGetRequest,
};
