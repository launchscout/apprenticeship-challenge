var assert = require('assert'); 
var async = require('async'); 
var viewEngine = require('../node_modules/express-react-views'); 
var viewOptions = { 
	settings: { 
		env: 'development', 
		views: __dirname
	}
}

var mysql = require('mysql'); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shopping_list'
});

connection.connect(); 

/** Checks to see if this new register function  is valid mysql or not. **/
function AddNewUser(cb){
	var post = {username: 'cmjgordon', password: 'cmjgordon'}; 
	
	connection.query("INSERT INTO users SET ?", [post], function(error, rows){
		if (error){
			assert(!err); 
		}
		else {
			cb(); 
		}
	});
}

function testComponent(path, cb) {
	AddNewUser(cb); 
}

async.series([
  function testModule(next) {
    testComponent(__dirname + '/component.jsx', next);
  },
], function done() {
  console.log('All tests pass!');
  process.exit(0);
});