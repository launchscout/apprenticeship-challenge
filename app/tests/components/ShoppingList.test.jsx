var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
////var $ = require('jquery');
//
var ShoppingList = require('ShoppingList');
var Item = require('Item');

describe('ShoppingList', () => {
    it('should exist', () => {
        expect(ShoppingList).toExist();
    });
    
    it('should render one Item component for each Item in list', () => {
        var items = [{
            id: 1,
            name: 'Cranberries'
        }, {
            id: 2,
            name: 'Daisy'
        }];
        var shoppingList = TestUtils.renderIntoDocument(<ShoppingList items={items}/>);
        var itemsComponents = TestUtils.scryRenderedComponentsWithType(shoppingList, Item);
        
        expect(itemsComponents.length).toBe(items.length);
    })
});
