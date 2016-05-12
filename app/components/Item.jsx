var React = require('react');

var Item = React.createClass({
    render: function () {
        var{id, name, price, sku, completed} = this.props;
        var itemClassName = completed ? 'item item-completed' : 'item';
        
        return (   
                 
            <div className={itemClassName} onClick={() => {
                    this.props.onToggle(id);
                }}>

                <div className="row">
                    <div className="small-6 large-6 columns">
                       {name} 
                    </div>
                    <div className="small-3 large-3 columns">
                        ${price}
                    </div>
                    <div className="small-3 large-3 columns">
                        {sku}
                    </div>
                </div>
                   
                             
                     <div> 
                        <input className="checkbox" type="checkbox" checked={completed}/> 
                        <label className="italics">&times; Remove from list</label>
                    </div>
                        
                
            </div>
                         
        )
    }    
}); 

module.exports = Item;