var React = require('react'); 

var LoginView = React.createClass({
	render: function(){ 
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
		)
	}
})

module.exports = LoginView; 