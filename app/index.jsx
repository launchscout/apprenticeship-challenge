import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation } from 'react-router';
import { browserHistory } from 'react-router'; //loads code to do push state
import helpers from './helpers';


var App = React.createClass({

  render : function() {
    var name = "Robert";
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
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
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
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
      return (
        <form className= "store-selector">
        {/*creating the store*/}
          <h2>Please Enter a Store</h2>
          <input type='text' ref='storeId' defaultValue={helpers.getFunName()} required/>
          <input type='Submit'/>
        </form>
      )
  }
});


var NotFound = React.createClass({

  render : function() {
    return (
      <p> 404 not found</p>
    )
  }
});

/*
Routes
*/

var routes = (
  <Router history={browserHistory} >
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
