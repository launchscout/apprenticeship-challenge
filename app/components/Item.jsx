var React = require('react');

var Item = React.createClass({
    render: function () {
        var{id, name, price, sku, completed} = this.props;
        
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
            <input type="checkbox" checked={completed}/>    
            {name}
            {price}
            {sku}
            </div>
        )
    }    
}); 

module.exports = Item;