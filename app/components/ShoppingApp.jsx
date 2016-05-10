//import React from 'react';
//import Note from './Note.jsx';

//export default class App extends React.Component {
//  render() {
//    return <Note />;
//  }
//}

var React = require('react');
var ShoppingList = require('ShoppingList');

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
    render: function () {
        var {items} = this.state;
        
        return (
            <div>
                <ShoppingList items={items}/>
            </div>
        )
    }    
}); 

module.exports = ShoppingApp;