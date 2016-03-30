import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';


var App = React.createClass({

  render : function() {
    var name = "Robert";
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header />
          </div>
            <Order/>
            <Inventory/>
        </div>
      )
  }
});

var Header = React.createClass({

  render : function() {
    return (
      <p>Header!</p>
    )
  }
});

var Order = React.createClass({

  render : function() {
    return (
      <p>Order!</p>
    )
  }
});

var Inventory = React.createClass({

  render : function() {
    return (
      <p>Inventory!</p>
    )
  }
});

var StorePicker = React.createClass({

  render : function() {
    var name = "Robert";
      return (
        <form className= "store-selector">
        {/*creating the store*/}
          <h2>Please Enter a Store {name}</h2>
          <input type='text' ref='storeID' required/>
          <input type='Submit'/>
        </form>
      )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
