var express = require('express');
var app = express();

var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
}); 

// create routes for admin section
var Router = express.Router();

Router.get('/', function(req, res) {
	res.send(__dirname + '/index.html');
});

app.use('/', Router);

var adminRouter = express.Router();

adminRouter.use(function(req, res, next) { // log each request to the console
    console.log(req.method, req.url);

// continue doing what we were doing and go to the route
	next(); 
});

adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!');
});

adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});

adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});

// route middleware that will happen on every request

app.use('/admin', adminRouter);

app.listen(3000);
