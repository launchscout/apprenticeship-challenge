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
                    text: 'Apples'
                }, {
                    id: uuid(),
                    text: 'Bananas'
                }, {
                    id: uuid(),
                    text: 'Coconuts'
                }, {
                    id: uuid(),
                    text: 'Danish'
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
                   text: text
               }
           ] 
        });
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