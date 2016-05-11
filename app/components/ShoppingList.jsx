//import React from 'react';

//export default () => <div>Learn React and Webpack!</div>;

var React = require('react');
var Item = require('Item');

var ShoppingList = React.createClass({
    render: function () {
        var {items} = this.props;    
        var renderItems = () => {
            if (items.length === 0) {
                return (
                    <p className="containerMessage">Nothing on list. Add items to shop for!</p>
                );
            }
            
            
            return items.map((item) => {
                return (
                <Item key={item.id} {...item} onToggle={this.props.onToggle}/>
                );
            });
        };

            return (
                <div>
                    {renderItems()}
                </div>
            )
        }    
}); 

module.exports = ShoppingList;