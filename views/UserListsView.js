import Glyphicon from 'react-bootstrap/lib/Glyphicon';

/** 
 * This loads all of the lists the user has created. 
 */ 

var React = require('react');
	
var UserListsView = React.createClass({
    /** Renders the user's items **/ 
    fetchItems: function(){
  	  var items = JSON.parse(this.props.items); 
  	  var itemArgs = []; 
	  
  	  for (var i=0; i < items.length; i++){ 
  		  var obj = items[i];
		  
  		  var listName = obj.list_name; 
  		  var listId = obj.list_id; 
  		  var thumbnailUrl = obj.thumbnail_url;
  		  var listNameUrl = "/list?listname="+listId+"&user="+this.props.username; 
		  
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
  			  				<input type="hidden" value={this.props.username} name="inputUsername"/>
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
	render: function(){
		return ( 
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
		  					<input type="hidden" name="inputUsername" value={this.props.username}/> 
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
		)
	}
})

module.exports = UserListsView; 