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
    
    it('should toggle completed value when handleToggle called', () => {
        var itemData = {
            id: 11,
            text: 'Testing toggle',
            completed: false
        };
        var shoppingApp = TestUtils.renderIntoDocument(<ShoppingApp/>);
        shoppingApp.setState({items: [itemData]});
       
        //check that items first item has completed value of false
        expect(shoppingApp.state.items[0].completed).toBe(false);
        //call handleToggle with 11
        shoppingApp.handleToggle(11);
        //verify that value has changed
        expect(shoppingApp.state.items[0].completed).toBe(true);
    });
});
