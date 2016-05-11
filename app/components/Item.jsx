var React = require('react');

var Item = React.createClass({
    render: function () {
        var{id, name, price, sku, completed} = this.props;
        var itemClassName = completed ? 'item-completed' : 'item-completed';
        
        return (   
                <div className={itemClassName} onClick={() => {
                    this.props.onToggle(id);
                }}>

                

                <div className="row">
                    <div className="large-4 columns">
                        {name}
                    </div>
                    <div className="large-4 columns">
                        ${price}
                    </div>
                    <div className="large-4 columns">
                        {sku}
                    </div>
                </div>
                 <div> 
                    <input type="checkbox" checked={completed}/> 
                    <label className="italics">Purchased?</label>
                 </div>
            </div>
                            
        )
    }    
}); 

module.exports = Item;