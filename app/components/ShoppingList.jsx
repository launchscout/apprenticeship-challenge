//import React from 'react';

//export default () => <div>Learn React and Webpack!</div>;

var React = require('react');
var Item = require('Item');

var ShoppingList = React.createClass({
    render: function () {
        var {items} = this.props;
        var renderItems = () => {
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