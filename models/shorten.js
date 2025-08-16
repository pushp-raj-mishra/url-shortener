const mongoose = require("mongoose");

const shortURLschema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    originalID: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const shortURL = mongoose.model("shortURL", shortURLschema);

module.exports = shortURL;
