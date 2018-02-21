var express 			= require('express');
var expressValidator 	= require('express-validator');
var http				= require('http');
var mongo      			= require('mongodb').MongoClient;
var assert				= require('assert');
//var socketio 			= require('socket.io')();

// web server
var app = express();
var route = express.Router(); // add support for express routing
var server = http.Server(app);
//var io = socketio(server);

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
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => logg('Example app listening on port 3000!'));

// logger that prevents circular object reference in javascript
var logg = function(msg, obj) {
    console.log('\n');
    if(obj) {
        try {
            console.log(msg + JSON.stringify(obj));
        } catch(err) {
            var simpleObject = {};
            for (var prop in obj ){
                if (!obj.hasOwnProperty(prop)){
                    continue;
                }
                if (typeof(obj[prop]) == 'object'){
                    continue;
                }
                if (typeof(obj[prop]) == 'function'){
                    continue;
                }
                simpleObject[prop] = obj[prop];
            }
            console.log('circular-' + msg + JSON.stringify(simpleObject)); // returns cleaned up JSON
        }        
    } else {
        console.log(msg);
    }
};

