var React = require('react');
var List = require('./List.jsx');

//this.state is used when data could change (immutable)
var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    onChange: function(e) {
        //update the state property every time a keystroke is typed
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        //stop the button from getting clicks since we are using onSubmit
        e.preventDefault();

        //grabs the current list of items
        var currentItems = this.state.items;

        //adds new item to the list
        currentItems.push(this.state.newItemText);

        //updates the main item list with the new list and clears the newItemText
        this.setState({items: currentItems, newItemText: ''});

    },

    render: function() {
        //onChange is called with every keystroke so we can store the most recent data entered
        //value is what he user sees on the input-box...we point this to newItemText so it updates on every keystroke
        //below use className instead of just class because react confused it with createClass

        var divStyle = {
            marginTop: 10
        }

        return (
          <div style={divStyle} className="col-sm-3">
              <div className="panel panel-success">
                  <div className="panel-heading">
                      <h3>{this.props.title}</h3>
                  </div>
                  <div className="row panel-body">
                      <form onSubmit={this.handleSubmit}>
                          <div className="col-sm-9">
                              <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                          </div>
                          <div className="col-sm-2">
                              <button className="btn btn-primary">Add</button>
                          </div>
                      </form>
                  </div>
                      <List items={this.state.items} />              
              </div>
          </div>
        );
    }

});

module.exports = ListManager;
