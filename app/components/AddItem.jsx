var React = require('react');

var AddItem = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        
        var item = this.refs.itemText.value;
        
        if (item.length > 0) {
            
            this.refs.itemText.value = '';
            this.props.onAddItem(item);
        } else {
            this.refs.itemText.focus();
        }
    },
    
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" ref="itemText" placeholder="What are you shopping for?"/>
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