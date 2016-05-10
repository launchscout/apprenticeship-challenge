var React = require('react');

var Item = React.createClass({
    render: function () {
        var{id, text, completed} = this.props;
        
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
            <input type="checkbox" checked={completed}/>    
            {text}
            </div>
        )
    }    
}); 

module.exports = Item;