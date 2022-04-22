//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
    {
        res.sendFile(__dirname + "/index.html");
    });

app.post("/", function(req,res)
    {
        var height = req.body.height;
        var weight = req.body.weight;

        var ans = weight/(height*height);
        res.send("Your BMI is: " + ans);
        var shivam="honestman"
    });

app.listen(3000,function()
    {
        console.log("Server running at port 3000");
    });