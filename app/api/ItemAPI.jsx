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
        
        return $.isArray(items) ? items : [];
    },
            
        filterItems: function (items, showCompleted) {
            var filteredItems = items;
            
            filteredItems = filteredItems.filter((item) => {
                return !item.completed || showCompleted;
            });
            
            return filteredItems;
        }
    };
