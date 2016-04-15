import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem'; 
import Label from 'react-bootstrap/lib/Label'; 
import Nav from 'react-bootstrap/lib/Nav'; 
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ShoppingNavbar from '../views/ShoppingNavbar.js';
import ItemView from '../views/ItemView.js';  
import UserListsView from '../views/UserListsView.js'; 

var React = require('react');
var app = require('../app'); 
var request = require('request'); 
var mysql = require('mysql'); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shopping_list'
});

connection.connect();

var ShoppingListApp = React.createClass({
  /** Sets the properties of the global variables **/
  getInitialState: function() {
    return this.props;
  },
  
  /** Sets the value of the username **/ 
  onChangeUsername: function(e) {
    this.setState({username: e.target.value});
  },  
  /** Sets the value of the password **/ 
  onChangePassword: function(e) {
    this.setState({password: e.target.value});
  },
  render: function() {
	  if (this.state.type == 'login'){ 
	  	return (
			<div>
			<form className="form-signin" action='/signin' method='post'>
					<h2 className="form-signin-heading">Shopping List</h2> 
					<label for="inputEmail" className="sr-only">Username</label>
					<input type="username" name='inputEmail' id="inputEmail" className="form-control" placeholder="Username" required autofocus/> 
      	  			<label for="inputPassword" className="sr-only">Password</label> 
					<input type="password" name='inputPassword' id="inputPassword" className="form-control" placeholder="Password" required/> 
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
					<a href="/register" className="btn btn-lg btn-primary btn-block" type="submit">Register</a>	
				</form>
			</div>
	  	); 
	  }
	  else if (this.state.type == 'list_detail'){
		  var username = this.state.username; 
		  var listName = this.state.list_name; 
		  		  
		  return ( 
		  	<div>			  
			   <ShoppingNavbar username={username}/> 
			   <ItemView username={username} list_name={listName} items={this.state.items}/> 
			</div>
		  ); 
	  }
	  else if (this.state.type == 'register'){
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
	  else if (this.state.type == 'home'){
		  var username = this.state.username; 
		  
		  if (this.state.sidebar_type == "items"){
			  return ( 
			  	<div>
				  <ShoppingNavbar username={username}/> 
				  <UserListsView username={username} items={this.state.items} /> 
				</div>
			  ); 
		  }
	  }
  }
});

module.exports = ShoppingListApp;
