import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem'; 
import Label from 'react-bootstrap/lib/Label'; 
import Nav from 'react-bootstrap/lib/Nav'; 
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

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
  /** Renders the items to a list **/
  fetchListItems: function(){
	  var items = JSON.parse(this.state.items);
	  var itemArgs = []; 
	  
	  for (var i=0; i < items.length; i++){ 
		  var obj = items[i]; 
		  var itemName = obj.item_name; 
		  var itemSku = obj.item_sku; 
		  var itemPrice = obj.item_price; 
		  var listId = obj.list_id; 
		  var thumbnailUrl = obj.thumbnail_url;  
		  
		  itemArgs.push(
		  	<div className="col-md-9" id="item_col"> 
				<div className="panel panel-default">
			  		<div className="panel-body">
			  			<div className="pull-left">
			  				{function(){
								if (thumbnailUrl != ""){
									return ( 
						  				<img src={thumbnailUrl}  id="item_avatar" />  
									)	
								}
								else {
									return ( 
						  				<img src="http://marketsquareltd.com/placeholder/blank-page/blank_page_item_04.png"  id="item_avatar" /> 									
									) 
								}
			  				}.call(this)}
							<text id='list_item'>{itemName}</text>
							<br /> 
							<br /> 
							<b>SKU:</b> {itemSku}
							<br /> 
							<b>Price:</b> ${itemPrice}
						</div>
						<div className="pull-right"> 
							<div id="item_wrapper"> 
								<form method="post" action="/removeitemlist">
									<input type="hidden" name="inputUsername" value={this.state.username}/>
									<input type="hidden" name="inputListName" value={listId}/>
									<input type="hidden" name="inputItemName" value={itemName}/>
									<button id="remove_btn" className="btn btn-primary">Remove</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		  ); 
	  }
	  
	  return itemArgs; 
  }, 
  
  /** Renders the user's items **/ 
  fetchItems: function(){
	  var items = JSON.parse(this.state.items); 
	  var itemArgs = []; 
	  
	  for (var i=0; i < items.length; i++){ 
		  var obj = items[i];
		  
		  var listName = obj.list_name; 
		  var listId = obj.list_id; 
		  var thumbnailUrl = obj.thumbnail_url;
		  var listNameUrl = "/list?listname="+listId+"&user="+this.state.username; 
		  
		  itemArgs.push(
		   <div className="col-md-9" id="item_col"> 
		  	<div className="panel panel-default">
			  <div className="panel-body">
			  	<div className="pull-left">
				{function(){
				if (thumbnailUrl != ""){
					return ( 
		  				<img src={thumbnailUrl}  id="item_avatar" />  
					)					
				}
				else { 
					return ( 
		  				<img src="http://marketsquareltd.com/placeholder/blank-page/blank_page_item_04.png"  id="item_avatar" />  
					)
				}
				}.call(this)}
					<a id='list_item' href={listNameUrl}>{listName}</a>
				</div>
			    <div className="pull-right">
			    	<div id='item_wrapper'> 
			  			<form action="/removelist" method="post">
			  				<input type="hidden" value={this.state.username} name="inputUsername"/>
			  				<input type="hidden" value={listId} name="inputListId"/>
			  				<button id="remove_btn" className="btn btn-primary">Remove</button>
			  			</form>
			        </div>
				</div>
			  </div>
			</div>
		    </div>
		  ); 
	  }
	  
	  return itemArgs; 
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
		  var homeUrl = "/?user="+this.state.username; 
		  
		  return ( 
		  	<div>
			<Navbar id="top_navbar" className="navbar-fixed-top">
				<Navbar.Header>
					<Navbar.Brand>
						<a href={homeUrl} id="nav_item">Shopping List</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem href={homeUrl}> <Label id="label"><Glyphicon glyph="user" id="nav_item"/> {this.state.username}</Label></NavItem> 
						<NavItem href="/logout"><Label id="label"><Glyphicon glyph="off" id="nav_item"/></Label></NavItem>
				</Nav>
			</Navbar>
			   <div className="container" id="groceries_list">
				    <div className="create_container_list">
			  			<div className="col-md-9" id="item_col">
			  				<div className="panel panel-default"> 
			  				<div className="panel-header"> 
          						<a id='add_item_header' data-toggle="collapse" href="#collapse1"><Glyphicon glyph="edit"/> Edit List Name</a>
							</div>
			  				<div id="collapse1" className="panel-collapse collapse">
							<form method="post" action="/editlistname">
							<div className="input-group">
			  					<div id="div_margin"></div>
			  					<input type="hidden" value={this.state.username} name="inputUsername"/> 
			  					<input type="hidden" value={this.state.list_name} name="inputListId" /> 
								<input type="text" className="form-control" placeholder="List Name" name="inputListName" id="list_item" required/>									
								<div className="input-group-btn">
			  						<div id="div_margin"></div>
									<button id='submit_right' className="btn" type="submit">Change</button>
			  						<div id="div_margin"></div>
								</div>
							</div>
							</form>	
			  				</div>
			  				</div>
						</div>
				  		<div className="col-md-9" id="item_col">
			  				<div className="panel panel-default">
			  				<div className="panel-header"> 
          						<a id='add_item_header' data-toggle="collapse" href="#collapse2"><Glyphicon glyph="plus" /> Add Item</a>
							</div>
			  				<div className="panel-collapse collapse" id="collapse2">
				  			<form action="/additem" method="post">
			  						<div id="div_margin"></div>
			  						<input type="hidden" name="inputListName" value={this.state.list_name}/> 
			  						<input type="hidden" name="inputUsername" value={this.state.username} /> 
									<div id='input_container'>
										<input id="list_item_2" type="text" className="form-control" placeholder="Item Name" name="inputItemName" required/>		
										<input id="list_item_2" type="text" className="form-control" placeholder="SKU" name="inputSKU" required/>
			  							<input id="list_item_2" type="text" className="form-control" placeholder="Price" name="inputPrice" required/> 
										<input id="list_item_2" type="text" className="form-control" placeholder="Thumbnail URL" name="inputThumbnailUrl" />
									</div>
				  					<br /> 
									<button id="submit_btn" className="btn" type="submit">Create</button>
							</form>
			  				</div>
			  				</div>
				  		</div>
					</div>
			  			{this.fetchListItems()}
			   </div>
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
		  if (this.state.sidebar_type == "items"){
			  return ( 
			  	<div>
				<Navbar id="top_navbar" className="navbar-fixed-top">
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/" id="nav_item">Shopping List</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullRight>
						<NavItem href="/"> <Label id="label"><Glyphicon glyph="user" id="nav_item"/> {this.state.username}</Label></NavItem> 
							<NavItem href="/logout"><Label id="label"><Glyphicon glyph="off" id="nav_item"/></Label></NavItem>
					</Nav>
				</Navbar>
				   <div className="container" id="groceries_list">
				    <div className="create_list_container">
				  		<div className="col-md-9" id="item_col">
				  		<div className="panel panel-default">
				  		<div className="panel-header">
          					<a id='add_item_header' data-toggle="collapse" href="#collapse1"><Glyphicon glyph="pencil" /> Create List</a>
						</div>
				  		<div id="collapse1" className="panel-collapse collapse">
				  			<form action="/createlist" method="post">
								<div className="input-group">
				  					<div id="div_margin"></div>
				  					<input type="hidden" name="inputUsername" value={this.state.username}/> 
									<input type="text" className="form-control" id='list_item' placeholder="List Name" name="inputListName"  required/>		
									<input type="text" className="form-control" id='list_item' placeholder="Thumbnail URL" name="inputThumbnailUrl"/> 
								</div>
				  					<br /> 
									<button id='submit_btn' className="btn" type="submit">Add</button>
							</form>
				  		</div>
				  		</div>
				  		</div>
					</div>
				  {this.fetchItems()}
				   </div>
				</div>
			  ); 
		  }
	  }
  }
});

module.exports = ShoppingListApp;
