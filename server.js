const express = require('express');
const bodyParser = require("body-parser");

let app = express();
//urlencoded - data that comes from an html form.

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
//    console.log(request);
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    let answer = parseInt(req.body.weight) / Math.pow(parseInt(req.body.height), 2);
    res.send(`Your BMI is ${answer}`);
});

app.listen(4000, function(){
    console.log("Server started");
});