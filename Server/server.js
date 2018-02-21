var express 			= require('express');
var expressValidator 	= require('express-validator');

var mongo      			= require('mongodb').MongoClient;
var assert				= require('assert');

var socketio 			= require('socket.io')();

// web server
var app = express();
var route = express.Router(); // add support for express routing
var server = http.Server(app);
var io = socketio(server);

// error handling middleware
var errorHandler = function(err, req, res, next) {
    if(err.status) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.render('error', { error : err });
    next(err);
};

app.use(errorHandler);

