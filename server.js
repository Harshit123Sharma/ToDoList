//jshint esversion:6

var items = [];
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res) {

    var today = new Date();
    //var currentDay = today.getDay();
    var options = {

        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric"

    };
    var day = today.toLocaleDateString("en-US", options); 
    console.log(day);
    /*switch (currentDay) {
        case 0 : 
            day = "Sunday";
            break;
        case 1 : 
            day = "Monday";
            break; 
        case 2 : 
            day = "Tuesday";
            break;
        case 3 : 
            day = "Wedday";
            break;
        case 4 : 
            day = "Thursday";
            break;
        case 5 : 
            day = "Friday";
            break;
        case 6 : 
            day = "Saturday";
            break;
        default:
            console.log("Error : Current day is : " + currentDay);
            break;
    }*/

    res.render("list", {
        
        DAY : day,
        LIST_ITEMS : items
    
    });

 
});

app.post("/", function(req, res) {

    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
    //console.log(item); 


});

app.listen(3000, function(){

    console.log("Server started on port 3000.");

});  
