var React = require('react');

var ListHeader = React.createClass({
    handleFilter: function () {
        var showCompleted = this.refs.showCompleted.checked;
        this.props.onFilter(showCompleted);
    },
    
     handleSubmit: function(e) {
        e.preventDefault();
        
        var listName = this.refs.listName.value;
         
         if (listName.length > 0) {        
            this.refs.listName.value = '';
            this.props.onSubmit(listName);
         } else {
             this.refs.listName.focus();
         }
         
    },
    
    render: function () {
        return (
            <div className = "containerHeader">
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="row">
                        <div className="large-12 columns">
                          <div className="row collapse">
                            <div className="small-10 columns">
                              <input type="text" ref="listName" placeholder="Shopping List Name"/>
                            </div>
                            <div className="small-2 columns">
                              <button className="button postfix">Go</button>
                            </div>
                          </div>
                        </div>
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
