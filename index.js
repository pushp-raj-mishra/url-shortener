const express = require("express");
const { connectDB } = require("./connections");
const redirect = require("./routes/redirect");
const shorten = require("./routes/shorten");
require("dotenv").config();

const PORT = process.env.PORT;
const mongoURI = process.env.mongodbURI;

connectDB(mongoURI);
const app = express();

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
app.use(express.json());
app.use("/shorten/", shorten);
app.use("/",redirect);
