var fs				= require('fs'); // file systems
var express 			= require('express'); // web server
var request			= require('request'); // http trafficer
var http			= require('http'); // http protocol
var bodyParser			= require('body-parser'); // http body parser
var assert			= require('assert');

var mongo      			= require('mongodb').MongoClient, // MongoDB driver
	assert			= require('assert'); // mongo
var objectID			= mongo.ObjectID;

var murl = 'mongodb://localhost:27017/jesuscout';
var DB_NAME   = 'jesuscout';

var app = express();
var router = express.Router(); // add support for express routing

var server = http.createServer(app);
//var io = require('socket.io')(server);

app.use(express.static('./../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*************
	Routes
*************/

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

//NOT YET
/*
// connect to socket.io
io.on('connection', function(socket){
	console.log('Socket connected');
	
	socket.on('matchFill', function(mtch) {
		io.emit('matchFill', mtch);
	});
});
*/

server.listen(3000, function() {
	console.log('listening on port 3000');
});

app.post('/match', function(req,res) {
	mongo.ops.insert('HeartlandMatches', req.body, function(error, result) {
		logg('/match req.body = ', req.body);
		
		if(error) res.status(500).send(error);
        else res.status(201).send(result);
	});
});

app.get('/api/HeartlandMatches', function(req, res) {
	mongo.ops.find('HeartlandMatches', req.body, function(error, result) {
		logg('/HeartlandMatches req.body = ', req.body); //not logging?
		
		if(error) res.status(500).send(error);
		else res.status(200).send(result);
	});
});

/**
 * MongoDB operations
 * connects to MongoDB and registers a series of asynchronous methods
 */
mongo.connect(murl, function(err, dbn) {
	assert.equal(null, err);
	console.log("Connected to database");
	
	const db = dbn.db(DB_NAME);
	
	mongo.ops = {};
    
    mongo.ops.find = function(collection, json, callback) {
        db.collection(collection).find(json).toArray(function(error, docs) {
            if(callback) callback(error, docs);
        });
    };
    
    mongo.ops.findOne = function(collection, json, callback) {
        db.collection(collection).findOne(json, function(error, doc) {
            if(callback) callback(error, doc);
        });
    };

    mongo.ops.insert = function(collection, json, callback) {
        db.collection(collection).insert(json, function(error, result) {
            if(callback) callback(error, result);
        });
    };

    mongo.ops.upsert = function(collection, query, json, callback) {
        db.collection(collection).updateOne(query, { $set: json }, { upsert: true }, function(error, result) {
            if (callback) callback(error, result);
        });
    };
    
    mongo.ops.updateOne = function(collection, query, json, callback) {
        db.collection(collection).updateOne(query, { $set : json }, function(error, result) {
            if(callback) callback(error, result);
        });
    };
    
    mongo.ops.deleteOne = function(collection, query, callback) {
        db.collection(collection).deleteOne(query, function(error, result) {
            if(callback) callback(error, result);
        });
    };
    
    mongo.ops.deleteMany = function(collection, query, callback) {
        db.collection(collection).deleteMany(query, function(error, result) {
            if(callback) callback(error, result);
        });
    };
});



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
