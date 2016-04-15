var express = require('express');
var reactViews = require('express-react-views');
var session = require('express-session'); 
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser')
var mysql = require('mysql'); 

/** Creates mysql connector and connects to database **/ 
var shoppingListConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shopping_list'
});

shoppingListConn.connect(); 

var app = module.exports = express(); // now app.js can be used in any file

/** Sets variables for Expres **/ 
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: 'keyboard cat', 
	resave: false, 
	saveUnintialized: true, 
	cookie: { 
		"maxAge": 86400000, 
		"secure": false
	}
})); 

/** Sets the port **/ 
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Dynamic react example listening on port ' + port);
});

/** Edit shopping list name **/
app.post('/editlistname', function(req, res){
	var username = req.body.inputUsername; 
		  
	shoppingListConn.query("UPDATE lists SET list_name = ? WHERE list_id = ?", [req.body.inputListName, req.body.inputListId], function(error, results, fields){
		if (!error){ 
			res.redirect('/list?listname='+req.body.inputListId+"&user="+username); 
		}
	}); 
}); 

/** POST version of signin **/ 
app.post('/signin', function(req, res){	
	var username = req.body.inputEmail; 
	var password = req.body.inputPassword; 
		
	// lets store the user's password without encrypting it LOL
	shoppingListConn.query("SELECT * FROM users WHERE `username` =? and `password` =?", [username, password], function(error, results, fields){
		if (!error){
			if (results.length != 0){ 
				res.redirect('/?user='+username);
			}
			else { 
				res.redirect('/signin')
			}
		}
		else { 
			res.redirect('/signin'); 
		}
	});
});  

/** Destroys session and then redirects user to signin page **/ 
app.get('/logout', function(req, res){
	req.session.current_user = null; 
	
	res.redirect('/signin'); 	
});

/** Adds an item to a list **/
app.post('/additem', function(req, res){
	var listId = req.body.inputListName; 
	var itemName = req.body.inputItemName; 
	var sku = req.body.inputSKU; 
	var price = req.body.inputPrice; 
	var username = req.body.inputUsername; 
	var thumbnailUrl = req.body.inputThumbnailUrl; 
		
	var post = {list_id: listId, item_name: itemName, item_sku: sku, item_price: price, thumbnail_url: thumbnailUrl}; 
	
	shoppingListConn.query("INSERT INTO items SET ?", [post], function(error, results, fields){
		if (!error){
			res.redirect('/list?listname='+listId+"&user="+username);
		}
		else { 
			console.log(error); 
		}
	});  
}); 

/** Creates a list **/ 
app.post('/createlist', function(req, res){
	var username = req.body.inputUsername; 
	var listname = req.body.inputListName;
	var thumbnailUrl = req.body.inputThumbnailUrl; 
	
	var post = {current_user: username, list_name: listname, list_id: Math.random(), thumbnail_url: thumbnailUrl}; 
	
	shoppingListConn.query("INSERT INTO lists SET ?", [post], function(error, results, fields){
		if (!error){ 
			res.redirect('/'); 
		}
		else { 
			console.log(error); 
		}
	}); 
});

/** Removes item from list **/ 
app.post('/removeitemlist', function(req, res){
	var username = req.body.inputUsername; 
	var listName = req.body.inputListName; 
	var itemName = req.body.inputItemName;
	
	shoppingListConn.query("DELETE FROM items WHERE list_id =? AND item_name =?", [listName, itemName], function(error, results, fields){
		if (!error){ 
			res.redirect('/list?listname='+listName);
		}
		else { 
			console.log(error); 
		}
	}); 	
});

/** Removes a list **/ 
app.post('/removelist', function(req, res){
	var username = req.body.inputUsername;
	var listId = req.body.inputListId;  
	
	var post = {current_user: username, list_id: listId}; 
		
	shoppingListConn.query("DELETE FROM lists WHERE list_id =?", [listId], function(error, results, fields){
		if (!error){ 
			res.redirect('/');
		}
		else { 
			console.log(error); 
		}
	}); 
});

/** POST version of /register - inserts data into mysql **/ 
app.post('/register', function(req, res){
	var username = req.body.inputEmail; 
	var password = req.body.inputPassword;
		
	shoppingListConn.query("SELECT * FROM users WHERE `username` =?", [username], function(error, results, fields){ 
		if (results.length != 0){ 
			// user is already registered
			res.redirect('/register');
		}
		else { 
			// register user
			var post = {username: username, password: password}

			shoppingListConn.query("INSERT INTO users SET ?", [post], function(error, results, fields){
				if (error){ 
					res.redirect('/register'); 
				}
				else { 
					res.redirect('/?user='+username);
				}
			});
		}
	});
});

/** Renders the register page **/ 
app.get('/register', function(req, res){ 
	var initState = null; 
	var currentUser = req.session.current_user; 
	
	if (currentUser){ 
		res.redirect('/?user='+currentUser); 
	}
	
	initState = { 
		username: '', 
		password: '',
		sidebar_type: 'items', 
		type: 'register' 
	}
	
	res.render('Html', {data : initState} ); 
}); 

/** Gets the items from a user's list  **/ 
app.get('/list', function(req, res){
	var listName = req.query.listname; 
	var currentUser = req.query.user; 
	
	if (listName != undefined){
		shoppingListConn.query("SELECT * FROM items WHERE `list_id` =?", [listName], function(error, results, fields){ 
        	 var initialState = {
      		type: 'list_detail',
      		username: currentUser, 
			items: JSON.stringify(results), 
      		list_name: listName,
      		variable: currentUser
        	};
		
      		res.render('Html', {data: initialState});
		});
	}
	else { 
		res.redirect('/'); 
	}
});

/** This is called to render the signin page **/
app.get('/signin', function(req, res){ 
	var currentUser = req.session.current_user; 
	
	if (currentUser){ 
		res.redirect('/?user='+currentUser); 
	}
	
	var initState = null; 
	
	if (!currentUser){
		initState = { 
			username: '',
			password: '', 
			sidebar_type: 'items', 
			type: 'login'
		}
	}
	else {
		// render main page
		initState = { 
			username: '',
			password: '',
			sidebar_type: 'items', 
			type: 'login'
		}
	}
	
	res.render('Html', {data: initState}); 
}); 

/** Main method that gets the homepage and sees if the user is logged in **/ 
app.get('/*', function (req, res) {	
	var variable = req.query.user;
	
	// see if there is a session or not.. in a real app we would use Passport 
	// and not a simple session
	if (req.session.current_user == undefined){ 
		if (req.query.user){ 
			shoppingListConn.query("SELECT * FROM lists WHERE `current_user` =?", [req.query.user], function(err, rows, fields)   
			{  
			  if (err) throw err;
			  						  
  		  	 var initialState = {
  				type: 'home',
  				username: variable, 
  				items: JSON.stringify(rows), 
  				sidebar_type: 'items', 
  				variable: variable
  		  	};
		
  			// we are coming from signin page and have to set session
  			req.session.current_user = variable; 
  		 	res.render('Html', { data: initialState });
			}); 			
		}
		else {
		  	var initialState = {
				type: 'login',
				username: '', 
				variable: variable
		  	};
			// no user period, direct them to signin page 
		 	res.render('Html', { data: initialState });
		}
	}
	else {
		shoppingListConn.query("SELECT * FROM lists WHERE `current_user` =?", [req.session.current_user], function(err, rows, fields)   
		{  
		  if (err) throw err;
		  						  
	  	 var initialState = {
			type: 'home',
			username: req.session.current_user, 
			items: JSON.stringify(rows), 
			sidebar_type: 'items', 
			variable: variable
	  	};
		
	 	res.render('Html', { data: initialState });
		});
	}	
});
