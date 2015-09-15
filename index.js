var express = require('express'),
    bodyParser = require('body-parser');

var app = new express();


app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/stocks', function(req, res) {
    res.json([
        {id: "TWTR", name: "Twitter Inc", price: 80, previous: 70},
        {id: "FB", name: "Facebook Inc", price: 54, previous: 58},
        {id: "GOOG", name: "Google Inc", price: 105, previous: 100}
    ]);
});


var registeredUsers = [];

app.post('/api/register', function(req, res) {
    var user = req.body.username;
    if (user && registeredUsers.indexOf(user) == -1) {
        registeredUsers.push(user);
        res.json({msg: "Successfully registered user '" + user + "'"});
    } else {
        res.status(400);
        res.json({msg: "User is already registered"});
    }
});


var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});