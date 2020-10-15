const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello there!");
});

app.listen(3000, function(req, res) {
    console.log("Listening at port 3000");
});