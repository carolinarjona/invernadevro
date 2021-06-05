require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const loadModels = require("./models/relationship");

var usersRouter = require("./routes/users");
var plantsRouter = require("./routes/plants");
var plantpotsRouter = require("./routes/plantpots");

var app = express();

loadModels();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/plants", plantsRouter);
app.use("/plantpots", plantpotsRouter);

module.exports = app;
