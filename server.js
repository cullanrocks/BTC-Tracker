// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Create Instance of Express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname +"/public"));
app.use("/", routes);

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost: %s in your browser.", PORT);
});
