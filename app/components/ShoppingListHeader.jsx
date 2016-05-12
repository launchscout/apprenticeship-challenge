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
                            Show Removed Items
                        </label>
                    </div>
            </div>
        
        )
    }
    
});

module.exports = ListHeader;
