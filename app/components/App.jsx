import React from 'react';
import uuid from 'node-uuid';
import Items from './Items.jsx';
import Name from './Name.jsx';
import Form from './Form.jsx';
import Firebase from "firebase";

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class App extends React.Component {
  
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			items: []
		};
	}

	componentWillMount() {

	  this.myFirebaseRef = new Firebase("https://crackling-inferno-2914.firebaseio.com/items");
	  this.shopListName = new Firebase("https://crackling-inferno-2914.firebaseio.com/shop_list/name")

	  //ITEMS

	  var that = this;
	  this.myFirebaseRef.once("value", function(snapshot) {

	  	var items = [];

	  	snapshot.forEach(function(data){
	  		var item = {
	  			sku: data.val().sku,
	  			name: data.val().name,
	  			price: data.val().price
	  		}

	  		items.push(item);
	  		that.setState({items: items});
	  	});

	  });

	  //LIST NAME

	  this.shopListName.once("value", function(snapshot) {
	  	
	  		var name = snapshot.val().name;
	  		
	  		that.setState({name: name});
  		
	  });

	}

	render() {

		const items = this.state.items;
		const name = this.state.name;

		return (
			<div>
				<Row>
					<Col md={6} xsOffset={3}>

						<Name name={name} onEdit={this.editName} />
						<Items items={items} onDelete={this.deleteItem} />
						<Form addItem={this.addItem}/>
					</Col>
				</Row>
			</div>
		);

	}

	addItem = (name, price) => {
		
		var newItem = {
			sku: uuid.v4(),
			name: name,
			price: price
		}      

		this.myFirebaseRef.push(newItem);

		this.setState({items: this.state.items.concat(newItem)});

	};

	deleteItem = (sku, e) => {
	
		e.stopPropagation();

		var that = this;

		this.myFirebaseRef.orderByChild("sku").equalTo(sku).on("value", function(snapshot) {

			snapshot.forEach(function(data) {

				var record = data.val(); 

				that.myFirebaseRef.child(data.key()).remove();
				
			});

		});

		this.setState({
			items: this.state.items.filter(item => item.sku !== sku)
		});

	};

	editName = (val) => {
	// Don't modify if trying set an empty value
		if(!val.trim()) {
			return;
		}

		const name = this.state.name;

		this.shopListName.update({ name: val });

		this.setState({name: val});

	};	

}
