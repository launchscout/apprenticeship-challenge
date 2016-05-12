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
            this.props.onAddTitle(listName);
         } else {
             this.refs.listName.focus();
         }
        console.log('listName is: ' + listName);
         
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
                              <button className="button postfix margin">Update</button>
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
                <p className = "text-centered information">Your list will show below. Add new items at the bottom. Click checkbox to display deleted items.</p> 
            </div>
            
        )
    }
    
});

module.exports = ListHeader;
