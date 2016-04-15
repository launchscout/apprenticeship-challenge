import Glyphicon from 'react-bootstrap/lib/Glyphicon';

var React = require('react'); 

/** 
 * This loads all of the items in a list view. 
 */ 

var ItemView = React.createClass({
    /** Renders the items to a list **/
    fetchListItems: function(){
  	  var items = JSON.parse(this.props.items);
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
  									<input type="hidden" name="inputUsername" value={this.props.username}/>
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
	render: function(){
		return ( 
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
	  					<input type="hidden" value={this.props.username} name="inputUsername"/> 
	  					<input type="hidden" value={this.props.list_name} name="inputListId" /> 
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
	  						<input type="hidden" name="inputListName" value={this.props.list_name}/> 
	  						<input type="hidden" name="inputUsername" value={this.props.username} /> 
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
		)
	}
})

module.exports = ItemView; 