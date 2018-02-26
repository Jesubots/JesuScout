var fs					= require('fs'); // file systems
var express 			= require('express'); // web server
var expressValidator 	= require('express-validator');
//var request				= require('request'); // http trafficer
var http				= require('http'); // http protocol
var bodyParser			= require('body-parser'); // http body parser
var assert				= require('assert');
var socketio 			= require('socket.io')();

var mongo      			= require('mongodb').MongoClient, // MongoDB driver
	assert				= require('assert'); // mongo
var objectID			= mongo.ObjectID;

var murl = 'mongodb://localhost:27017/data';
var DB_NAME   = 'jesuscout';

/**
 * MongoDB operations
 * connects to MongoDB and registers a series of asynchronous methods
 
mongo.connect(murl, function(err, db) {
	assert.equal(null, err);
	logg("Connected successfully to server");
	
	db.close;
});
*/
var app = express();
var route = express.Router(); // add support for express routing
var server = http.Server(app);
//var io = socketio(server);

app.use(express.static('./../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(allowCrossDomain);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.listen(3000, function() {
	logg('listening on port 3000');
});

/*************
*************/
app.post('/match', function(req,res) {
	logg('match posted successfully!');
	logg(req.body);
});


// error handling middleware
function errorHandler(err, req, res, next) {
    if(err.status) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.render('error', { error : err });
    next(err);
};

/**
 * Middleware:
 * allows cross domain requests
 * ends preflight checks
 */
function allowCrossDomain(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');

    // end pre flights
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
    } else {
        next();
    }
}

/**
 * Custom logger to prevent circular reference in JSON.parse(obj)
 */
function logg(msg, obj) {
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
