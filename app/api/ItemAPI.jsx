var $ = require('jquery');

module.exports = {
    setItems: function(items) {
        if ($.isArray(items)) {
            localStorage.setItem('items', JSON.stringify(items));
            return items;
        }
    },
    getItems: function () {
        var stringItems = localStorage.getItem('items');
        var items = [];
    
        try {
            items = JSON.parse(stringItems);
        } catch (e) {
            
        }
        
        //return $.isArray(items) ? items : [];
        
        if ($.isArray(items)) {
            return items;
        } else {
            return [];
        }
    }
};