// Dependencies
var express = require("express");
var PORT = process.env.PORT || 5000;
var app = express();

app.get("/", function(req, res) {
  res.json({
    msg: "Welcome to restaurant API"
  });
});

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/restaurants", require("./routes/restaurants"));

app.listen(PORT, function() {
  console.log(
    "🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!",
    PORT,
    PORT
  );
});
