"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _index = _interopRequireDefault(require("./routes/index"));

var _path = _interopRequireDefault(require("path"));

// Server var
const app = (0, _express.default)(); // View engine setup

app.set("views", _path.default.join(__dirname, 'static', "views"));
app.set("view engine", "ejs"); // Middleware

app.use((0, _compression.default)());
app.use('/public', _express.default.static(_path.default.join(__dirname, 'static', 'public')));
app.use(_express.default.static(__dirname + "/public")); //Routes

app.use("/", _index.default);
const port = process.env.PORT || 3000;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}`);
});