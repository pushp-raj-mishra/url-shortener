const express = require("express");
const { connectDB } = require("./connections");
const redirect = require("./routes/redirect");
const shorten = require("./routes/shorten");
const shortURL = require("./models/shorten");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const home = require('./routes/home')
require("dotenv").config();

const PORT = process.env.PORT;
const mongoURI = process.env.mongodbURI;

connectDB(mongoURI);
const app = express();

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use("/shorten/", shorten);
app.use('/static/',staticRouter);
app.use('/home',home);
app.use("/", redirect);