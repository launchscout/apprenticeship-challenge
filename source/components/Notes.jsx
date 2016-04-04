var React = require('react');
var List = require('./List.jsx');
var ListManager = require('./ListManager.jsx');

var Notes = React.createClass({
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

        return (
            <div className="col-md-12">
              <div className="jumbotron">
                  <div>
                      <h1>{this.props.title}</h1>
                  </div>

                  <div className="row">
                      <form onSubmit={this.handleSubmit}>
                          <div className="col-md-9">
                             <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                          </div>
                          <div className="col-md-2">
                             <button className="btn btn-primary">Add</button>
                          </div>
                      </form>
                  </div>

                    <List items={this.state.items} />
               </div>
            </div> //div for col-md-12

        );
    }


});


module.exports = Notes;
