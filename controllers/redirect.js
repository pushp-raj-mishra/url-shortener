const shortURL = require("../models/shorten");

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

module.exports = {
  redirectTo,
};
