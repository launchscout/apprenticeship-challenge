import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem'; 
import Label from 'react-bootstrap/lib/Label'; 
import Nav from 'react-bootstrap/lib/Nav'; 
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ShoppingNavbar from '../views/ShoppingNavbar.js';
import ItemView from '../views/ItemView.js';  
import UserListsView from '../views/UserListsView.js'; 
import RegisterView from '../views/RegisterView.js'; 
import LoginView from '../views/LoginView.js'; 

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
  render: function() {
	  if (this.state.type == 'login'){ 
	  	return (
			<LoginView /> 
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
			  <RegisterView /> 
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
