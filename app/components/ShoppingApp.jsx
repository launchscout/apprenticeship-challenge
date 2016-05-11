//import React from 'react';
//import Note from './Note.jsx';

//export default class App extends React.Component {
//  render() {
//    return <Note />;
//  }
//}

var React = require('react');
var uuid = require('node-uuid');

var ShoppingList = require('ShoppingList');
var AddItem = require('AddItem');
var ItemAPI = require('ItemAPI');

var ShoppingApp = React.createClass({
    getInitialState: function () {
        return {
            items: ItemAPI.getItems()
        };
    },
    componentDidUpdate: function () {
      ItemAPI.setItems(this.state.items);  
    },
    handleAddItem: function (name, price, sku) {
        this.setState({
           items: [
               ...this.state.items, 
               {
                   id: uuid(),
                   name: name,
                   price: price,
                   sku: sku,
                   completed: false
               }
           ] 
        });
    },
    
    
    handleToggle: function (id) {
        var updatedItems = this.state.items.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            
            return item;
        });
        
        this.setState({items: updatedItems});
    },
    
    render: function () {
        var {items} = this.state;
        
        return (
            <div>
                <ShoppingList items={items} onToggle={this.handleToggle}/>
                <AddItem onAddItem={this.handleAddItem}/>
            </div>
        )
    }    
}); 

module.exports = ShoppingApp;