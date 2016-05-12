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
                <div className="switch small">
                      <input className="switch-input" id="yes-no" type="checkbox" ref="showCompleted" onClick={this.handleFilter}>
                      <label className="switch-paddle" for="yes-no">
                        <span className="show-for-sr">Do you like me?</span>
                        <span className="switch-active" aria-hidden="true">Yes</span>
                        <span className="switch-inactive" aria-hidden="true">No</span>
                      </label></input>
                </div>
            </div>
        
        )
    }
    
});

module.exports = ListHeader;
