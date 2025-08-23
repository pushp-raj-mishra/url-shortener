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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const shortURL = mongoose.model("shortURL", shortURLschema);

module.exports = shortURL;
