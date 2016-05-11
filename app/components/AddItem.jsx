var React = require('react');

var AddItem = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        
        var itemName = this.refs.itemName.value;
        var itemPrice = this.refs.itemPrice.value;
        var itemSku = this.refs.itemSku.value;
        
        if (itemName.length > 0 && itemPrice > 0 && itemSku.length > 0) {        
            this.refs.itemName.value = '';
            this.refs.itemPrice.value = '';
            this.refs.itemSku.value = '';
            this.props.onAddItem(itemName, itemPrice, itemSku);
        } else {
            this.refs.itemName.focus();
        }
    },

    render: function () {
        return (
            <div className = "container_footer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <p>Enter the item you would like to buy</p>
                            <input type="text" ref="itemName" placeholder="What are you shopping for?"/>
                        </div>
                        <div>
                            <p>Enter the price of the item</p>
                            <input type="number" min="0.01" step="0.01" ref="itemPrice" placeholder="e.g. 14.99"/>
                        </div>
                        <div>
                            <p>Enter the SKU of the item</p>
                            <input type="text" ref="itemSku" placeholder="e.g. NIKE-T15-SM"/>
                        </div>
                    </div>
                    <div>
                        <button className="button expanded">Add Item</button>
                    </div>
                </form>
            </div>
        
        )
    },
    
});

module.exports = AddItem;