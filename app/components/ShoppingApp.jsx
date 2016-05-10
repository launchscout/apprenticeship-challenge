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

var ShoppingApp = React.createClass({
    getInitialState: function () {
        return {
            items: [
                {
                    id: 1,
                    text: 'Apples'
                }, {
                    id: 2,
                    text: 'Bananas'
                }
            ]
        };
    },
    handleAddItem: function (text) {
        alert('new item: ' + text);
    },
    
    render: function () {
        var {items} = this.state;
        
        return (
            <div>
                <ShoppingList items={items}/>
                <AddItem onAddItem={this.handleAddItem}/>
            </div>
        )
    }    
}); 

module.exports = ShoppingApp;