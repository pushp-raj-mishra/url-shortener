const mongoose = require("mongoose");

function connectDB(URI) {
  mongoose.connect(URI).then(console.log("Database connected"));
}

module.exports = {
  connectDB,
};
