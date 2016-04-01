import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation } from 'react-router';
import { browserHistory } from 'react-router'; //loads code to do push state
import helpers from './helpers';


var App = React.createClass({
  //react lifescycle. Before anything populates, what is it's initial state:
  getInitialState : function() {
    return {
      fishes : {},
      order : {}
    }
  },
  addFish : function(fish) {
    var timestamp = (new Date()).getTime();
    //update state object
    this.state.fishes['fish-' + timestamp] = fish;
    //set the state
    this.setState({ fishes : this.state.fishes });
  },
  render : function() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
          </div>
            <Order/>
            {/*to have access to addFish, we must travel across methods/components*/}
            <Inventory addFish={this.addFish}/>
        </div>
      )
  }

});

var AddFishForm = React.createClass({
  createFish : function(event) {
    // 1. stop the form from submitting defaultly
    event.preventDefault();
    // 2. Take the data from the form and create an object
    var fish = {
      name : this.refs.name.value,
      price : this.refs.status.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // 3. add the fish to the app state
    this.props.addFish(fish);
    // this.refs.fishForm.reset();
  },
  render : function() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" ></input>
        <input type="text" ref="price" placeholder="Fish Price" ></input>
        <select ref="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">Add Item</button>
      </form>
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
      <div>
      <h2>Inventory!</h2>
      {/*to have access to addFish, we must travel across methods/components*/}
      <AddFishForm {...this.props}/>
      {/*... this spread adds all of the props from the current component to child components*/}
      </div>
    )
  }
});

var StorePicker = React.createClass({
  goToStore : function(event) {
    // prevents submit button from going into post and changing pages. note 'event' in function parameter also necessary
    event.preventDefault();
    // get data from input
    var storeId = this.refs.storeId.value; //ref refers to reference input in input html.
    browserHistory.push('/store/' + storeId);
  },
  render : function() {
      return (
        <form className= "store-selector" onSubmit={this.goToStore}>
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
