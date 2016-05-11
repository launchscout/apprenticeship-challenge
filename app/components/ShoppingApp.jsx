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
var ShoppingListHeader = require('ShoppingListHeader')
var ItemAPI = require('ItemAPI');

var ShoppingApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            listTitle: '',
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
    
    handleFilter: function (showCompleted, listTitle) {
        this.setState({
            showCompleted: showCompleted,
            listTitle: listTitle
            
        })
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
        var {items, showCompleted} = this.state;
        var filteredItems = ItemAPI.filterItems(items, showCompleted);
            
        
        return (
        <div>
            <h1 className="page-title">Shopping List App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                            <ShoppingListHeader onFilter={this.handleFilter}/>
                       
                        <div className="container">
                            
                            <AddItem onAddItem={this.handleAddItem}/>
                            <ShoppingList items={filteredItems} onToggle={this.handleToggle}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}); 

module.exports = ShoppingApp;