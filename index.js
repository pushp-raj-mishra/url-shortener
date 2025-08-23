const express = require("express");
const { connectDB } = require("./connections");
const redirect = require("./routes/redirect");
const shortURL = require("./models/shorten");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const home = require("./routes/home");
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const { authenticateUser } = require("./middlewares/auth");
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static/", staticRouter);
app.use("/home", authenticateUser, home);
app.use("/user", userRoute);
app.use("/", redirect);
