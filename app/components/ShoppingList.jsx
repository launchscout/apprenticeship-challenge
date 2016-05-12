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
                    <div className="row description">
                            <div className="small-6 large-6 columns">
                               Item
                            </div>
                            <div className="small-3 large-3 columns">
                                Price
                            </div>
                            <div className="small-3 large-3 columns">
                                SKU
                            </div>
                        </div>
                        <div>
                            {renderItems()}
                        </div>
                    </div>
            )
        }    
}); 

module.exports = ShoppingList;