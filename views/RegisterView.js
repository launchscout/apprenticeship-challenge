var React = require('react'); 

var RegisterView = React.createClass({
	render: function(){ 
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
		)
	}
})

module.exports = RegisterView; 