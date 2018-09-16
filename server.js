
// npm install express mongoose body-parser path express-session validator
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var session= require('express-session')
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

require("./server/config/routes.js")(app);
require('./server/config/mongoose.js')

app.listen(8000, function() {
    console.log("listening on port 8000");
})