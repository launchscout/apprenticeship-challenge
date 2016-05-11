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
                <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="large-4 columns">
                              <label>Item to buy
                                <input type="text" ref="itemName" placeholder="Shoes"/>
                              </label>
                            </div>
                            <div className="large-4 columns">
                              <label>Price
                                <input type="number" min="0.01" step="0.01" ref="itemPrice" placeholder="19.99"/>
                              </label>
                            </div>
                            <div className="large-4 columns">
                              <label>SKU
                                <input type="text" ref="itemSku" placeholder="NIKE-AIR-07"/>
                              </label>
                            </div>
                        </div>
                    <div>
                        <button className="button expanded">Add Item</button>
                    </div>
                </form>
            
      
        )
    },
    
});

module.exports = AddItem;

