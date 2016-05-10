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
                    text: 'Apples',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Bananas',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Coconuts',
                    copmleted: true
                }, {
                    id: uuid(),
                    text: 'Danish',
                    completed: false
                }
            ]
        };
    },
    handleAddItem: function (text) {
        this.setState({
           items: [
               ...this.state.items, 
               {
                   id: uuid(),
                   text: text,
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