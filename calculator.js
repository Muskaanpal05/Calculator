const express = require("express");
const app = express();

app.get("/", function(req, res) {
    //  res.send("index.html");  Realtive path
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(req, res) {
    console.log("Listening at port 3000");
});