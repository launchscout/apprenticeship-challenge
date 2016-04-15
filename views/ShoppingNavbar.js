import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem'; 
import Label from 'react-bootstrap/lib/Label'; 
import Nav from 'react-bootstrap/lib/Nav'; 
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

/** 
 * This is the main navigation bar that is displayed once the user logs in. 
 */ 

var React = require('react');

var ShoppingNavbar = React.createClass({
	render: function(){
		var username = this.props.username; 
		var homeUrl = "/?user="+username
	 
		return (
				<Navbar id="top_navbar" className="navbar-fixed-top">
					<Navbar.Header>
						<Navbar.Brand>
							<a href={homeUrl} id="nav_item">Shopping List</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav pullRight>
						<NavItem href={homeUrl}> <Label id="label"><Glyphicon glyph="user" id="nav_item"/> {username}</Label></NavItem> 
							<NavItem href="/logout"><Label id="label"><Glyphicon glyph="off" id="nav_item"/></Label></NavItem>
					</Nav>
				</Navbar>
		)
	}
}); 

module.exports = ShoppingNavbar; 