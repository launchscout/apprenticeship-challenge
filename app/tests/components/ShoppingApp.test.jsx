var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
////var $ = require('jquery');
//
var ShoppingApp = require('ShoppingApp');

describe('ShoppingApp', () => {
    it('should exist', () => {
        expect(ShoppingApp).toExist();
    });
    
    it('should add item to the items state on handleItem', () => {
       var itemText = "Salad";
       var shoppingApp = TestUtils.renderIntoDocument(<ShoppingApp/>);
                                                  
        shoppingApp.setState({items: []});
        shoppingApp.handleAddItem(itemText);
        
        expect(shoppingApp.state.items[0].text).toBe(itemText);
    });
});
