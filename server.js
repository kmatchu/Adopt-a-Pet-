var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var PORT = process.env.PORT || 3000;



app.listen(PORT);


