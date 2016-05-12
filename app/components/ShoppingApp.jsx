var React = require('react');
var uuid = require('node-uuid');

var ShoppingList = require('ShoppingList');
var AddItem = require('AddItem');
var ShoppingListHeader = require('ShoppingListHeader')
var ItemAPI = require('ItemAPI');

var ShoppingApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            listName: '',
            items: ItemAPI.getItems()
        };
    },
    componentDidUpdate: function () {
      ItemAPI.setItems(this.state.items);  
    },
    
    handleAddItem: function (name, price, sku) {
        this.setState({
           items: [
               ...this.state.items, 
               {
                   id: uuid(),
                   name: name,
                   price: price,
                   sku: sku,
                   completed: false
               }
           ] 
        });
    },
    
    handleFilter: function (showCompleted) {
        this.setState({
            showCompleted: showCompleted
        })
},
       handleSubmit: function (listName) {
        this.setState({
            listName: listName
            
        })
},
    
    handleToggle: function (id) {
        var updatedItems = this.state.items.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            
            return item;
        });
        
        this.setState({items: updatedItems});
    },
    
    render: function () {
        var {items, showCompleted} = this.state;
        var filteredItems = ItemAPI.filterItems(items, showCompleted);
            
        
        return (
        <div>

                <div className="row">
                    <div className="columns small-centered small-11 medium-6 large-5">
                         <img src="http://i.imgur.com/LzoLnow.png?1"/>   
                        
                        <div className="container">
                            <p>Welcome to SHOPR. To get started, enter the name of your shopping list.</p> 
                            <ShoppingListHeader onSubmit={this.handleSubmit} onFilter={this.handleFilter}/>                
                            <ShoppingList items={filteredItems} onToggle={this.handleToggle}/>
                            <AddItem onAddItem={this.handleAddItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}); 

module.exports = ShoppingApp;