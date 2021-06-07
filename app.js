require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const loadModels = require("./models/relationship");

var usersRouter = require("./routes/users");
var plantsRouter = require("./routes/plants");
var plantpotsRouter = require("./routes/plantpots");
const errorHandler = require("./middleware/errorHandler");
const tokenValidation = require("./middleware/tokenValidation");

var app = express();

loadModels();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(tokenValidation);

app.use("/users", usersRouter);
app.use("/plants", plantsRouter);
app.use("/plantpots", plantpotsRouter);

app.use(errorHandler);

module.exports = app;
