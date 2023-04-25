const express = require('express');
const bodyParser = require('body-parser');
const date = require("./date");

let items = [];

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let day = date();
    
    res.render("list", {kindOfDay: day, newItemList: items})
});

app.post("/", (req, res) => {
    let newItem = req.body.newItem;

    items.push(newItem);
 

    res.redirect("/");

});



app.listen(process.env.PORT || 3000);