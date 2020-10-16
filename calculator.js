const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    //  res.sendFile("index.html");  Realtive path
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var n1 = Number(req.body.num1); //It will read text value comes from req.body.num1 so i.e why Number is put
    var n2 = Number(req.body.num2);
    var result = n1 + n2; //Without including Number in above two values it will simply concatenate instead of adding values.
    res.send("The result of the calculation is :" + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var w1 = parseFloat(req.body.w); // To convert weight into decimal number parseFloat is included
    var h1 = parseFloat(req.body.h);
    var bmi = w1 / (h1 * h1);
    res.send("Your BMI is :" + bmi);
});

app.listen(3000, function(req, res) {
    console.log("Listening at port 3000");
});