var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var mongojs = require("mongojs");

var databaseUrl = "mydb";
var collections = ["users", "reports"]
var db = mongojs.connect(databaseUrl, collections);

app = express.createServer();
app.configure(function() {
    app.use(express.bodyParser());
    app.use(app.router);
    app.use("/public", express.static(__dirname + '/public'));
});
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(app.router);

app.get('/', function(request, response){
response.render('index.ejs');
/*	response.render('index.ejs', {}, function(err, str) {
    response.render('layout.ejs', {
        body: str
    });
});*/
});

console.log("Listening on port 8080");
app.listen(8080);
