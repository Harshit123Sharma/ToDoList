//jshint esversion:6

let items = [];
let workItems = [];

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));


app.get("/", function(req, res) {

    let today = new Date();
    //let currentDay = today.getDay();
    let options = {

        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric"

    };
    let day = today.toLocaleDateString("en-US", options); 
    //console.log(day);
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

    let item = req.body.newItem;
    
    if (req.body.list === "Work") {

        workItems.push(item);
        res.redirect("/work");

    }
    else {

        items.push(item);
        res.redirect("/");

    }

});

app.get("/work", function(req, res) {

    res.render("list", {

        DAY : "Work List",
        LIST_ITEMS : workItems

    })

});

app.post("/work", function(req, res) {

    let item = req.body.newItem;
    workItems.push(item)
    res.redirect("/work");

});

app.listen(3000, function(){

    console.log("Server started on port 3000.");

});  
