//import React from 'react';
//import Note from './Note.jsx';

//export default class App extends React.Component {
//  render() {
//    return <Note />;
//  }
//}

var React = require('react');
var ShoppingList = require('ShoppingList');
var AddItem = require('AddItem');
var uuid = require('node-uuid');

var ShoppingApp = React.createClass({
    getInitialState: function () {
        return {
            items: [
                {
                    id: uuid(),
                    name: 'Apples',
                    price: '4.99',
                    sku: 'APPL-GRN-14',
                    completed: false
                }, {
                    id: uuid(),
                    name: 'Bananas',
                    price: '8',
                    sku: 'BNN-YEL-12',
                    completed: true
                }, {
                    id: uuid(),
                    name: 'Coconuts',
                    price: '6.50',
                    sku: 'CCN-BRN-88',
                    completed: true
                }, {
                    id: uuid(),
                    name: 'Danish',
                    price: '18.00',
                    sku: 'DAN-YUM-16',
                    completed: false
                }
            ]
        };
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