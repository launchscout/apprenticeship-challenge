var React = require('react');
var app = require('../app'); 
var mysql = require('mysql'); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shopping_list'
});

// accept a callback function to execute after getting results...
function searchCoords(callback){
  itemArgs = new Array(); 
	
  connection.query('SELECT * FROM items', function(err, result){
    	if(err){
			itemArgs.append(<p>False</p>); 
    	}
		else { 
			itemArgs.append(<p>True</p>); 
		}
    	// run the callback function, passing the results...
    	callback(itemArgs);
  });
}
//http://stackoverflow.com/questions/21563046/node-js-mysql-query-nested-function-returning-array

connection.connect();

var Index = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
		  	<div>
      	  		<form className="form-signin" action='/register' method='post'>
					<h2 className="form-signin-heading">Shopping List</h2> 
					<label for="inputEmail" className="sr-only">Username</label>
					<input type="username" name="inputEmail" id="inputEmail" className="form-control" placeholder="Username" required autofocus/> 
      	  			<label for="inputPassword" className="sr-only">Password</label> 
					<input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required/> 
					<button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
				</form>				
			</div>
    );
  }
});

module.exports = Index;