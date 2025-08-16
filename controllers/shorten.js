const shortURl = require("../models/shorten.js");
const { nanoid } = require("nanoid");

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
  return res.json({ id: shortId });
}




module.exports = {
    handleUrlShortening
};
