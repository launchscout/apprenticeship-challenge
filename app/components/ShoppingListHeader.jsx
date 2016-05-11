var React = require('react');

var ListHeader = React.createClass({
    handleFilter: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var listTitle = this.refs.listTitle.value;
        
        this.props.onFilter(showCompleted, listTitle);
    },
    
    render: function () {
        return (
            <div className = "containerHeader">
                <form onSubmit={this.handleSubmit}>
                    <div> 
                        <label>
                            <input type="text" ref="listTitle" placeholder="Enter List Title"/>
                        </label>
                    </div>    
                </form>
                    <div> 
                        <label>
                            <input type="checkbox" ref="showCompleted" onChange={this.handleFilter}/>
                            Show Purchased Items
                        </label>
                    </div>
            </div>
        
        )
    }
    
});

module.exports = ListHeader;


//
//                <form onSubmit={this.handleSubmit}>
//                    <div className = "containerFooter">
//                        <div>
//                            <p>Enter the item you would like to buy</p>
//                            <input type="text" ref="itemName" placeholder="What are you shopping for?"/>
//                        </div>
//                        <div>
//                            <p>Enter the price of the item</p>
//                            <input type="number" min="0.01" step="0.01" ref="itemPrice" placeholder="e.g. 14.99"/>
//                        </div>
//                        <div>
//                            <p>Enter the SKU of the item</p>
//                            <input type="text" ref="itemSku" placeholder="e.g. NIKE-T15-SM"/>
//                        </div>
//                    </div>
//                    <div>
//                        <button className="button expanded">Add Item</button>
//                    </div>
//                </form>
//            </div>