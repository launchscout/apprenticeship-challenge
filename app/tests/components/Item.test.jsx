var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Item = require('Item');

describe('Item', () => {
    it('should exist', () => {
        expect(Item).toExist();
    });
    
    it('should call onToggle prop with id on click', () => {
        var itemData = {
            id: 200,
            text: 'Writing id.text.jsdx test',
            completed: true
        };
        var spy = expect.createSpy();
        var item = TestUtils.renderIntoDocument(<Item {...itemData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(item));
        
        TestUtils.Simulate.click($el[0]);
        
        expect(spy).toHaveBeenCalledWith(200);
    });
});
