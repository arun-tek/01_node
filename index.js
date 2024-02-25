const express = require("express");

const path = require('path');

const app = express();

port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/demo', function(req, res){ 
  
    // Rendering our web page i.e. Demo.ejs 
    // and passing title variable through it 
    res.render('Demo', { 
        title: 'View Engine Demo'
    }) 
}) 

app.get('/home', function(req, res){
    res.render("abc/Home.ejs", {name: "Arun Tekwani"});
})

app.get("/",(req, res) => {
    res.send("Hello world!");
});

app.get("/twitter",(req, res) => {
    res.send("twitter code");
});

app.get("/github",(req, res) => {
    res.send("<h1>Jai Shri Ram github</h1>");
});

app.listen(port,() => {
    console.log("server is running on port "+ port);
})